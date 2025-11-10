"use client";

import { useEffect, useState } from "react";
import { StatsCard } from "@/components/shared/StatsCard";
import {
  Users,
  DollarSign,
  TrendingUp,
  Calendar,
  AlertCircle,
  Clock,
} from "lucide-react";

interface AgentStats {
  totalClients: number;
  activeClients: number;
  yearlyRevenue: number;
  monthlyRevenue: number;
  avgPolicyValue: number;
  conversionRate: number;
  upcomingMeetings: number;
  pendingCommissions: number;
  recentCommissions: Array<{
    id: string;
    amount: number;
    type: string;
    status: string;
    clientName: string;
    date: string;
    policyProvider: string;
  }>;
  upcomingMeetingsList: Array<{
    id: string;
    title: string;
    clientName: string;
    scheduledAt: string;
    type: string;
    location: string;
  }>;
}

export default function AgentDashboard() {
  const [stats, setStats] = useState<AgentStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const res = await fetch("/api/agent/stats");
      if (!res.ok) {
        throw new Error("Failed to fetch stats");
      }
      const data = await res.json();
      setStats(data);
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

  if (error || !stats) {
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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("he-IL", {
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  };

  const getCommissionStatusColor = (status: string) => {
    switch (status) {
      case "RECEIVED":
        return "bg-green-100 text-green-800";
      case "PENDING":
        return "bg-yellow-100 text-yellow-800";
      case "OVERDUE":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCommissionStatusText = (status: string) => {
    switch (status) {
      case "RECEIVED":
        return "התקבל";
      case "PENDING":
        return "ממתין";
      case "OVERDUE":
        return "באיחור";
      case "DISPUTED":
        return "במחלוקת";
      default:
        return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Welcome message */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">שלום! 👋</h1>
        <p className="text-gray-600 mt-1">
          הנה סיכום הפעילות שלך
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="סך לקוחות"
          value={stats.totalClients}
          change={`${stats.activeClients} פעילים`}
          changeType="increase"
          icon={Users}
          iconColor="text-blue-600"
        />

        <StatsCard
          title="עמלות שנתיות"
          value={formatCurrency(stats.yearlyRevenue)}
          change={`${formatCurrency(stats.monthlyRevenue)} החודש`}
          changeType="increase"
          icon={DollarSign}
          iconColor="text-green-600"
        />

        <StatsCard
          title="ממוצע ערך פוליסה"
          value={formatCurrency(stats.avgPolicyValue)}
          change={`${stats.conversionRate}% המרה`}
          icon={TrendingUp}
          iconColor="text-purple-600"
        />

        <StatsCard
          title="פגישות קרובות"
          value={stats.upcomingMeetings}
          change={`${stats.pendingCommissions} עמלות ממתינות`}
          icon={Calendar}
          iconColor="text-orange-600"
        />
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Commissions */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              עמלות אחרונות
            </h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              צפה בהכל
            </button>
          </div>

          {stats.recentCommissions.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              אין עמלות להצגה
            </div>
          ) : (
            <div className="space-y-3">
              {stats.recentCommissions.map((commission) => (
                <div
                  key={commission.id}
                  className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {commission.clientName}
                    </p>
                    <p className="text-xs text-gray-500">
                      {commission.policyProvider}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getCommissionStatusColor(
                        commission.status
                      )}`}
                    >
                      {getCommissionStatusText(commission.status)}
                    </span>
                    <span className="text-sm font-semibold text-gray-900">
                      {formatCurrency(commission.amount)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Upcoming Meetings */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              פגישות קרובות
            </h2>
            <button className="text-sm text-primary-600 hover:text-primary-700 font-medium">
              לוח שנה
            </button>
          </div>

          {stats.upcomingMeetingsList.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              אין פגישות מתוכננות
            </div>
          ) : (
            <div className="space-y-3">
              {stats.upcomingMeetingsList.map((meeting) => (
                <div
                  key={meeting.id}
                  className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {meeting.title}
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      {meeting.clientName}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatDate(meeting.scheduledAt)}
                      {meeting.location && ` • ${meeting.location}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Alerts section */}
      {stats.pendingCommissions > 0 && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="text-sm font-medium text-yellow-900">
              יש לך {stats.pendingCommissions} עמלות ממתינות
            </h3>
            <p className="text-sm text-yellow-700 mt-1">
              בדוק את דף העמלות למעקב מלא
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
