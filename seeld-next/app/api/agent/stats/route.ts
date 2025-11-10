import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

// Force dynamic rendering
export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session || session.user.role !== "AGENT") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const agentId = session.user.agentId;

    if (!agentId) {
      return NextResponse.json(
        { error: "Agent profile not found" },
        { status: 404 }
      );
    }

    // Get all stats in parallel
    const [
      totalClients,
      activeClients,
      yearlyRevenue,
      monthlyRevenue,
      upcomingMeetings,
      pendingCommissions,
      agent,
    ] = await Promise.all([
      // Total clients
      prisma.client.count({
        where: { agentId },
      }),

      // Active clients
      prisma.client.count({
        where: {
          agentId,
          user: { status: "ACTIVE" },
        },
      }),

      // Yearly revenue
      prisma.commission.aggregate({
        where: {
          agentId,
          status: "RECEIVED",
          actualDate: {
            gte: new Date(new Date().getFullYear(), 0, 1),
          },
        },
        _sum: { amount: true },
      }),

      // Monthly revenue
      prisma.commission.aggregate({
        where: {
          agentId,
          status: "RECEIVED",
          actualDate: {
            gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          },
        },
        _sum: { amount: true },
      }),

      // Upcoming meetings
      prisma.meeting.count({
        where: {
          agentId,
          scheduledAt: { gte: new Date() },
          status: { in: ["SCHEDULED", "CONFIRMED"] },
        },
      }),

      // Pending commissions
      prisma.commission.count({
        where: {
          agentId,
          status: "PENDING",
        },
      }),

      // Agent profile
      prisma.agent.findUnique({
        where: { id: agentId },
        select: {
          totalClients: true,
          activeClients: true,
          totalRevenue: true,
        },
      }),
    ]);

    // Calculate average policy value
    const clientPolicies = await prisma.policy.aggregate({
      where: {
        client: { agentId },
        status: "ACTIVE",
      },
      _sum: { coverageAmount: true },
      _count: true,
    });

    const avgPolicyValue = clientPolicies._count
      ? Number(clientPolicies._sum.coverageAmount) / clientPolicies._count
      : 0;

    // Get recent commissions
    const recentCommissions = await prisma.commission.findMany({
      where: { agentId },
      include: {
        policy: {
          include: {
            client: {
              include: {
                user: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
      take: 10,
    });

    // Get upcoming meetings
    const upcomingMeetingsList = await prisma.meeting.findMany({
      where: {
        agentId,
        scheduledAt: { gte: new Date() },
        status: { in: ["SCHEDULED", "CONFIRMED"] },
      },
      include: {
        client: {
          include: {
            user: {
              select: {
                name: true,
                phone: true,
              },
            },
          },
        },
      },
      orderBy: { scheduledAt: "asc" },
      take: 5,
    });

    // Calculate conversion rate (example: clients with at least 1 policy)
    const clientsWithPolicies = await prisma.client.count({
      where: {
        agentId,
        totalPolicies: { gt: 0 },
      },
    });

    const conversionRate =
      totalClients > 0 ? (clientsWithPolicies / totalClients) * 100 : 0;

    return NextResponse.json({
      totalClients,
      activeClients,
      yearlyRevenue: Number(yearlyRevenue._sum.amount) || 0,
      monthlyRevenue: Number(monthlyRevenue._sum.amount) || 0,
      avgPolicyValue: Math.round(avgPolicyValue),
      conversionRate: Math.round(conversionRate * 10) / 10,
      upcomingMeetings,
      pendingCommissions,
      recentCommissions: recentCommissions.map((c: any) => ({
        id: c.id,
        amount: Number(c.amount),
        type: c.type,
        status: c.status,
        clientName: c.policy.client.user.name,
        date: c.actualDate || c.expectedDate,
        policyProvider: c.policy.provider,
      })),
      upcomingMeetingsList: upcomingMeetingsList.map((m: any) => ({
        id: m.id,
        title: m.title,
        clientName: m.client.user.name,
        clientPhone: m.client.user.phone,
        scheduledAt: m.scheduledAt,
        type: m.type,
        location: m.location,
      })),
    });
  } catch (error) {
    console.error("Error fetching agent stats:", error);
    return NextResponse.json(
      { error: "Failed to fetch agent stats" },
      { status: 500 }
    );
  }
}
