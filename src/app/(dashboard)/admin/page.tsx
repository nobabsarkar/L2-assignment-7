"use client";

import { useMemo } from "react";
import { useAdminGetAllComplain } from "@/hooks/complain.hook";
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import {
  ClipboardList,
  Clock,
  CheckCircle2,
  Loader2,
  AlertCircle,
  Activity,
} from "lucide-react";

type Complaint = {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  status: string;
  createdAt: string;
  updatedAt: string;
};

const PAGE_SIZE = 10;

const STATUS_COLORS: Record<string, string> = {
  PENDING: "#F59E0B",
  APPROVED: "#6366F1",
  IN_PROGRESS: "#06B6D4",
  RESOLVED: "#10B981",
  REJECTED: "#F43F5E",
};

const AdminPage = () => {
  const query = {
    searchTerm: "",
    status: "",
    location: "",
    minPrice: "",
    maxPrice: "",
    sortBy: "createdAt",
    sortOrder: "desc" as const,
    page: 1,
    limit: PAGE_SIZE,
  };

  const { data, isLoading, isFetching, isError } =
    useAdminGetAllComplain(query);

  // Your API response: data.data.data
  const complaints: Complaint[] = data?.data?.data ?? [];

  // Summary statistics from the complaints returned by the API
  const totalComplaints = complaints.length;

  const pendingCount = complaints.filter(
    (item) => item.status === "PENDING",
  ).length;

  const inProgressCount = complaints.filter(
    (item) => item.status === "IN_PROGRESS",
  ).length;

  const resolvedCount = complaints.filter(
    (item) => item.status === "RESOLVED",
  ).length;

  // Group complaints by month for the current year
  const monthlyData = useMemo(() => {
    const currentYear = new Date().getFullYear();

    const months = Array.from({ length: 12 }, (_, index) => ({
      month: new Date(currentYear, index).toLocaleString("en-US", {
        month: "short",
      }),
      complaints: 0,
      resolved: 0,
    }));

    complaints.forEach((complaint) => {
      const date = new Date(complaint.createdAt);

      if (Number.isNaN(date.getTime()) || date.getFullYear() !== currentYear) {
        return;
      }

      const monthIndex = date.getMonth();

      months[monthIndex].complaints += 1;

      if (complaint.status === "RESOLVED") {
        months[monthIndex].resolved += 1;
      }
    });

    return months;
  }, [complaints]);

  // Count complaints by their actual status
  const statusData = useMemo(() => {
    const statusCounts: Record<string, number> = {
      PENDING: 0,
      APPROVED: 0,
      IN_PROGRESS: 0,
      RESOLVED: 0,
      REJECTED: 0,
    };

    complaints.forEach((complaint) => {
      statusCounts[complaint.status] =
        (statusCounts[complaint.status] ?? 0) + 1;
    });

    return Object.entries(statusCounts)
      .filter(([, value]) => value > 0)
      .map(([status, value]) => ({
        name: status.replaceAll("_", " "),
        value,
        color: STATUS_COLORS[status] ?? "#94A3B8",
      }));
  }, [complaints]);

  const summaryCards = [
    {
      title: "Complaints on Page",
      value: totalComplaints,
      description: "Complaints returned by the API",
      icon: ClipboardList,
      color: "text-indigo-500",
      bg: "bg-indigo-500/10",
    },
    {
      title: "Pending",
      value: pendingCount,
      description: "Awaiting review",
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
    },
    {
      title: "In Progress",
      value: inProgressCount,
      description: "Currently being handled",
      icon: Activity,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
    },
    {
      title: "Resolved",
      value: resolvedCount,
      description: "Successfully completed",
      icon: CheckCircle2,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
    },
  ];

  const tooltipStyle = {
    backgroundColor: "var(--card)",
    border: "1px solid var(--border)",
    borderRadius: "12px",
    color: "var(--card-foreground)",
  };

  return (
    <main className="min-h-screen space-y-6 bg-background p-4 text-foreground sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Monitor complaints, track service performance, and review complaint
            trends.
          </p>
        </div>

        {isFetching && !isLoading && (
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="size-4 animate-spin" />
            Updating data...
          </div>
        )}
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex min-h-60 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card">
          <Loader2 className="size-8 animate-spin text-primary" />
          <p className="text-sm text-muted-foreground">
            Loading dashboard data...
          </p>
        </div>
      )}

      {/* Error State */}
      {isError && !isLoading && (
        <div className="flex min-h-40 flex-col items-center justify-center gap-3 rounded-xl border border-destructive/30 bg-card p-6 text-center">
          <AlertCircle className="size-8 text-destructive" />
          <h2 className="font-semibold">Failed to load complaints</h2>
          <p className="text-sm text-muted-foreground">
            Please check your API connection and try again.
          </p>
        </div>
      )}

      {/* Dashboard Content */}
      {!isLoading && !isError && (
        <>
          {/* Summary Cards */}
          <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {summaryCards.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        {item.title}
                      </p>

                      <h2 className="mt-3 text-3xl font-bold tracking-tight">
                        {item.value}
                      </h2>
                    </div>

                    <div className={`rounded-xl p-3 ${item.bg}`}>
                      <Icon className={`size-5 ${item.color}`} />
                    </div>
                  </div>

                  <p className="mt-3 text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </section>

          {/* Bar Chart */}
          <section className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Monthly Complaints</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Complaints created versus complaints currently marked as
                resolved, grouped by creation month.
              </p>
            </div>

            <div className="h-[300px] w-full sm:h-[350px]">
              {totalComplaints === 0 ? (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  No complaint data available.
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={monthlyData}
                    margin={{ top: 10, right: 8, left: -18, bottom: 0 }}
                    barGap={5}
                  >
                    <defs>
                      <linearGradient
                        id="complaintsGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#818CF8" stopOpacity={1} />
                        <stop
                          offset="100%"
                          stopColor="#4338CA"
                          stopOpacity={0.85}
                        />
                      </linearGradient>

                      <linearGradient
                        id="resolvedGradient"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop offset="0%" stopColor="#34D399" stopOpacity={1} />
                        <stop
                          offset="100%"
                          stopColor="#047857"
                          stopOpacity={0.85}
                        />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      stroke="var(--border)"
                      strokeDasharray="3 3"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                    />

                    <YAxis
                      allowDecimals={false}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                    />

                    <Tooltip
                      contentStyle={tooltipStyle}
                      cursor={{ fill: "var(--muted)", opacity: 0.3 }}
                    />

                    <Legend />

                    <Bar
                      dataKey="complaints"
                      name="Complaints"
                      fill="url(#complaintsGradient)"
                      radius={[5, 5, 0, 0]}
                    />

                    <Bar
                      dataKey="resolved"
                      name="Resolved"
                      fill="url(#resolvedGradient)"
                      radius={[5, 5, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              )}
            </div>
          </section>

          {/* Line Chart */}
          <section className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">
                Complaint Activity Trend
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Monthly trend of created and resolved complaints.
              </p>
            </div>

            <div className="h-[300px] w-full sm:h-[350px]">
              {totalComplaints === 0 ? (
                <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                  No complaint data available.
                </div>
              ) : (
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={monthlyData}
                    margin={{ top: 10, right: 12, left: -18, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="complaintLineGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#818CF8" />
                        <stop offset="100%" stopColor="#4F46E5" />
                      </linearGradient>

                      <linearGradient
                        id="resolvedLineGradient"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#6EE7B7" />
                        <stop offset="100%" stopColor="#059669" />
                      </linearGradient>
                    </defs>

                    <CartesianGrid
                      stroke="var(--border)"
                      strokeDasharray="3 3"
                      vertical={false}
                    />

                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                    />

                    <YAxis
                      allowDecimals={false}
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
                    />

                    <Tooltip contentStyle={tooltipStyle} />
                    <Legend />

                    <Line
                      type="monotone"
                      dataKey="complaints"
                      name="Complaints"
                      stroke="url(#complaintLineGradient)"
                      strokeWidth={3}
                      dot={{ r: 3, fill: "#6366F1" }}
                      activeDot={{ r: 6 }}
                    />

                    <Line
                      type="monotone"
                      dataKey="resolved"
                      name="Resolved"
                      stroke="url(#resolvedLineGradient)"
                      strokeWidth={3}
                      dot={{ r: 3, fill: "#10B981" }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>
          </section>

          {/* Donut Chart */}
          <section className="rounded-xl border border-border bg-card p-4 shadow-sm sm:p-6">
            <div className="mb-2">
              <h2 className="text-lg font-semibold">
                Complaint Status Distribution
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Breakdown of complaints by their current status.
              </p>
            </div>

            {statusData.length === 0 ? (
              <div className="flex h-[300px] items-center justify-center text-sm text-muted-foreground">
                No complaint status data available.
              </div>
            ) : (
              <div className="grid items-center gap-4 md:grid-cols-2">
                <div className="h-[300px] min-w-0">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={statusData}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        innerRadius={65}
                        outerRadius={100}
                        paddingAngle={3}
                        stroke="var(--card)"
                        strokeWidth={3}
                      >
                        {statusData.map((entry) => (
                          <Cell key={entry.name} fill={entry.color} />
                        ))}
                      </Pie>

                      <Tooltip contentStyle={tooltipStyle} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="space-y-4">
                  {statusData.map((item) => {
                    const percentage =
                      totalComplaints > 0
                        ? (item.value / totalComplaints) * 100
                        : 0;

                    return (
                      <div key={item.name} className="space-y-2">
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <span
                              className="size-3 rounded-full"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-sm font-medium">
                              {item.name}
                            </span>
                          </div>

                          <span className="text-sm font-semibold tabular-nums">
                            {item.value}{" "}
                            <span className="font-normal text-muted-foreground">
                              ({percentage.toFixed(0)}%)
                            </span>
                          </span>
                        </div>

                        <div className="h-2 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full transition-all duration-500"
                            style={{
                              width: `${percentage}%`,
                              backgroundColor: item.color,
                            }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </section>

          {/* Data Notice */}
          <p className="text-xs text-muted-foreground">
            Charts and summary cards use the complaints returned by the current
            API request. For database-wide statistics, use backend aggregate
            statistics or an endpoint that returns all relevant complaint
            records.
          </p>
        </>
      )}
    </main>
  );
};

export default AdminPage;
