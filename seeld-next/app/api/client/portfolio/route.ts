import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import {
  calculatePensionProjection,
  calculateAge,
} from "@/lib/calculations/pension";
import { analyzeCoverageGaps } from "@/lib/calculations/coverage";

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "CLIENT") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const clientId = session.user.clientId;

    if (!clientId) {
      return NextResponse.json(
        { error: "Client profile not found" },
        { status: 404 }
      );
    }

    // Get client data with all relations
    const client = await prisma.client.findUnique({
      where: { id: clientId },
      include: {
        user: true,
        policies: {
          where: { status: "ACTIVE" },
        },
        recommendations: {
          where: { status: { in: ["PENDING", "REVIEWED"] } },
          orderBy: { priority: "desc" },
        },
        agent: {
          include: {
            user: {
              select: {
                name: true,
                phone: true,
                email: true,
              },
            },
          },
        },
      },
    });

    if (!client) {
      return NextResponse.json(
        { error: "Client not found" },
        { status: 404 }
      );
    }

    // Calculate portfolio summary
    const totalPolicies = client.policies.length;
    const totalCoverage = client.policies.reduce(
      (sum, p) => sum + Number(p.coverageAmount),
      0
    );
    const monthlyCost = client.policies
      .filter((p) => p.premiumFrequency === "MONTHLY")
      .reduce((sum, p) => sum + Number(p.premium), 0);

    // Calculate pension projection if applicable
    const pensionPolicies = client.policies.filter((p) =>
      ["PENSION", "PROVIDENT_FUND"].includes(p.type)
    );

    let pensionProjection = null;
    if (pensionPolicies.length > 0 && client.dateOfBirth) {
      const currentAge = calculateAge(client.dateOfBirth);
      const currentBalance = Number(client.portfolioValue) || 0;

      // Estimate monthly deposits from pension policies
      const monthlyDeposits = pensionPolicies
        .filter((p) => p.premiumFrequency === "MONTHLY")
        .reduce((sum, p) => sum + Number(p.premium), 0);

      // Assume 60/40 split between employee and employer
      const employeeDeposit = monthlyDeposits * 0.6;
      const employerDeposit = monthlyDeposits * 0.4;

      pensionProjection = calculatePensionProjection({
        currentAge,
        retirementAge: 67, // Default Israeli retirement age
        currentBalance,
        monthlyEmployeeDeposit: employeeDeposit,
        monthlyEmployerDeposit: employerDeposit,
        expectedAnnualReturn: 5, // Conservative estimate
        inflationRate: 2, // Israeli average
        currentMonthlyIncome: Number(client.monthlyIncome) || undefined,
      });
    }

    // Analyze coverage gaps
    const coverageAnalysis = analyzeCoverageGaps(client);

    // Get policy breakdown by type
    const policyBreakdown = client.policies.reduce((acc, policy) => {
      const type = policy.type;
      if (!acc[type]) {
        acc[type] = {
          count: 0,
          totalCoverage: 0,
          monthlyCost: 0,
        };
      }
      acc[type].count++;
      acc[type].totalCoverage += Number(policy.coverageAmount);
      if (policy.premiumFrequency === "MONTHLY") {
        acc[type].monthlyCost += Number(policy.premium);
      }
      return acc;
    }, {} as Record<string, { count: number; totalCoverage: number; monthlyCost: number }>);

    return NextResponse.json({
      summary: {
        totalPolicies,
        totalCoverage,
        monthlyCost,
        portfolioValue: Number(client.portfolioValue),
        adequacyScore: coverageAnalysis.adequacyScore,
      },
      policies: client.policies.map((p) => ({
        id: p.id,
        type: p.type,
        provider: p.provider,
        policyNumber: p.policyNumber,
        coverageAmount: Number(p.coverageAmount),
        premium: Number(p.premium),
        premiumFrequency: p.premiumFrequency,
        startDate: p.startDate,
        status: p.status,
      })),
      policyBreakdown,
      pensionProjection,
      coverageAnalysis,
      recommendations: client.recommendations.map((r) => ({
        id: r.id,
        type: r.type,
        title: r.title,
        description: r.description,
        priority: r.priority,
        potentialSavings: r.potentialSavings ? Number(r.potentialSavings) : null,
        estimatedCost: r.estimatedCost ? Number(r.estimatedCost) : null,
        status: r.status,
      })),
      agent: {
        name: client.agent.user.name,
        phone: client.agent.user.phone,
        email: client.agent.user.email,
      },
      client: {
        name: client.user.name,
        email: client.user.email,
        dateOfBirth: client.dateOfBirth,
        monthlyIncome: client.monthlyIncome ? Number(client.monthlyIncome) : null,
      },
    });
  } catch (error) {
    console.error("Error fetching client portfolio:", error);
    return NextResponse.json(
      { error: "Failed to fetch portfolio" },
      { status: 500 }
    );
  }
}
