"use client";

import { useEffect, useState } from "react";
import { StatsCard } from "@/components/shared/StatsCard";
import {
  FileText,
  DollarSign,
  TrendingUp,
  Shield,
  AlertTriangle,
  CheckCircle,
} from "lucide-react";

interface ClientPortfolio {
  summary: {
    totalPolicies: number;
    totalCoverage: number;
    monthlyCost: number;
    portfolioValue: number;
    adequacyScore: number;
  };
  policies: Array<{
    id: string;
    type: string;
    provider: string;
    coverageAmount: number;
    premium: number;
    status: string;
  }>;
  pensionProjection: any;
  coverageAnalysis: {
    adequacyScore: number;
    insights: Array<{
      type: string;
      category: string;
      message: string;
      recommendation?: string;
    }>;
  };
  recommendations: Array<{
    id: string;
    type: string;
    title: string;
    priority: string;
  }>;
  agent: {
    name: string;
    phone: string | null;
    email: string;
  };
}

export default function ClientDashboard() {
  const [portfolio, setPortfolio] = useState<ClientPortfolio | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchPortfolio();
  }, []);

  const fetchPortfolio = async () => {
    try {
      const res = await fetch("/api/client/portfolio");
      if (!res.ok) {
        throw new Error("Failed to fetch portfolio");
      }
      const data = await res.json();
      setPortfolio(data);
    } catch (err) {
      setError("שגיאה בטעינת נתונים");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">טוען נתונים...</p>
        </div>
      </div>
    );
  }

  if (error || !portfolio) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
        {error || "לא ניתן לטעון נתונים"}
      </div>
    );
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("he-IL", {
      style: "currency",
      currency: "ILS",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const getPolicyTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      LIFE_INSURANCE: "ביטוח חיים",
      HEALTH_INSURANCE: "ביטוח בריאות",
      DISABILITY_INSURANCE: "אובדן כושר עבודה",
      PENSION: "פנסיה",
      PROVIDENT_FUND: "קרן השתלמות",
      STUDY_FUND: "קרן השתלמות",
      MORTGAGE_INSURANCE: "ביטוח משכנתא",
      PROPERTY_INSURANCE: "ביטוח דירה",
      VEHICLE_INSURANCE: "ביטוח רכב",
      OTHER: "אחר",
    };
    return labels[type] || type;
  };

  const getInsightIcon = (type: string) => {
    switch (type) {
      case "critical":
        return <AlertTriangle className="h-5 w-5 text-red-600" />;
      case "warning":
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case "good":
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      default:
        return null;
    }
  };

  const getInsightColor = (type: string) => {
    switch (type) {
      case "critical":
        return "bg-red-50 border-red-200";
      case "warning":
        return "bg-yellow-50 border-yellow-200";
      case "good":
        return "bg-green-50 border-green-200";
      default:
        return "bg-gray-50 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome message */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">שלום! 👋</h1>
        <p className="text-gray-600 mt-1">
          הנה סיכום התיק הפיננסי שלך
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="סך פוליסות"
          value={portfolio.summary.totalPolicies}
          icon={FileText}
          iconColor="text-blue-600"
        />

        <StatsCard
          title="כיסוי ביטוחי"
          value={formatCurrency(portfolio.summary.totalCoverage)}
          icon={Shield}
          iconColor="text-green-600"
        />

        <StatsCard
          title="עלות חודשית"
          value={formatCurrency(portfolio.summary.monthlyCost)}
          icon={DollarSign}
          iconColor="text-purple-600"
        />

        <StatsCard
          title="ציון כיסוי"
          value={`${portfolio.summary.adequacyScore}%`}
          icon={TrendingUp}
          iconColor={
            portfolio.summary.adequacyScore >= 80
              ? "text-green-600"
              : portfolio.summary.adequacyScore >= 60
              ? "text-yellow-600"
              : "text-red-600"
          }
        />
      </div>

      {/* Pension Projection */}
      {portfolio.pensionProjection && (
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 border border-primary-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            תחזית פנסיה
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-sm text-gray-600">צבור נוכחי</p>
              <p className="text-2xl font-bold text-gray-900 mt-1">
                {formatCurrency(portfolio.pensionProjection.currentBalance)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">צפוי בפרישה (גיל 67)</p>
              <p className="text-2xl font-bold text-primary-600 mt-1">
                {formatCurrency(portfolio.pensionProjection.totalAtRetirement)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-600">קצבה חודשית צפויה</p>
              <p className="text-2xl font-bold text-secondary-600 mt-1">
                {formatCurrency(portfolio.pensionProjection.monthlyPension)}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Coverage Insights */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          מצב כיסוי ביטוחי
        </h2>
        <div className="space-y-3">
          {portfolio.coverageAnalysis.insights.map((insight, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 p-4 rounded-lg border ${getInsightColor(
                insight.type
              )}`}
            >
              <div className="flex-shrink-0 mt-0.5">
                {getInsightIcon(insight.type)}
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">
                  {insight.message}
                </p>
                {insight.recommendation && (
                  <p className="text-sm text-gray-600 mt-1">
                    {insight.recommendation}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Policies Grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            הפוליסות שלי
          </h2>
          <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
            צפה בהכל
          </button>
        </div>

        {portfolio.policies.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 text-center text-gray-500">
            אין פוליסות להצגה
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {portfolio.policies.slice(0, 6).map((policy) => (
              <div
                key={policy.id}
                className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-sm font-semibold text-gray-900">
                    {getPolicyTypeLabel(policy.type)}
                  </h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    פעיל
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-3">{policy.provider}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">כיסוי:</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(policy.coverageAmount)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">פרמיה:</span>
                    <span className="font-semibold text-gray-900">
                      {formatCurrency(policy.premium)}/חודש
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recommendations */}
      {portfolio.recommendations.length > 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              המלצות אישיות
            </h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              צפה בהכל
            </button>
          </div>
          <div className="space-y-3">
            {portfolio.recommendations.slice(0, 3).map((rec) => (
              <div
                key={rec.id}
                className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`px-2 py-1 text-xs font-medium rounded-full ${
                        rec.priority === "HIGH" || rec.priority === "URGENT"
                          ? "bg-red-100 text-red-800"
                          : rec.priority === "MEDIUM"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {rec.priority === "HIGH" || rec.priority === "URGENT"
                        ? "דחוף"
                        : rec.priority === "MEDIUM"
                        ? "בינוני"
                        : "נמוך"}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {rec.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Contact Agent */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-medium text-blue-900 mb-2">
          הסוכן שלך: {portfolio.agent.name}
        </h3>
        <div className="flex flex-wrap gap-4 text-sm text-blue-700">
          {portfolio.agent.phone && (
            <span>טלפון: {portfolio.agent.phone}</span>
          )}
          <span>אימייל: {portfolio.agent.email}</span>
        </div>
      </div>
    </div>
  );
}
