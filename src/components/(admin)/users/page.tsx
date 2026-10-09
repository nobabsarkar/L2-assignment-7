"use client";

import { useMemo, useState } from "react";

import {
  Ban,
  CheckCircle2,
  Search,
  ShieldCheck,
  UserRound,
  Users,
  Wrench,
  LoaderCircle,
  Mail,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useGetAllUser, useUpdateUserRole } from "@/hooks/user.hook";
import type { TUsers } from "@/types/complain.type";
import { UserRole } from "@/types/user.type";

const UserPage = () => {
  const { data, isLoading, isError } = useGetAllUser();
  const updateRoleMutation = useUpdateUserRole();
  const [search, setSearch] = useState("");

  const users: TUsers[] = data?.data ?? [];

  const filteredUsers = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) return users;

    return users.filter(
      (user) =>
        user.name?.toLowerCase().includes(term) ||
        user.email?.toLowerCase().includes(term),
    );
  }, [users, search]);

  const handleRoleChange = (userId: string, role: UserRole) => {
    updateRoleMutation.mutate({ id: userId, role });
  };

  const adminCount = users.filter((user) => user.role === "ADMIN").length;
  const citizenCount = users.filter((user) => user.role === "CITIZEN").length;
  const workerCount = users.filter(
    (user) => user.role === "SERVICE_WORKER",
  ).length;

  return (
    <div className="min-h-screen w-full space-y-6 bg-background p-1 sm:p-2">
      {/* Page heading */}
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Users className="size-4" />
            Administration
            <span>/</span>
            <span className="text-foreground">User Management</span>
          </div>

          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            User Management
          </h1>

          <p className="text-sm text-muted-foreground">
            Manage accounts, assign roles, and oversee your CityCare team.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border bg-card px-4 py-3 shadow-sm">
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Users className="size-5" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total users</p>
            <p className="text-xl font-bold">{users.length}</p>
          </div>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="All Users"
          value={users.length}
          icon={<Users className="size-5" />}
          iconClass="bg-primary/10 text-primary"
        />
        <SummaryCard
          title="Citizens"
          value={citizenCount}
          icon={<UserRound className="size-5" />}
          iconClass="bg-slate-500/10 text-slate-600 dark:text-slate-300"
        />
        <SummaryCard
          title="Administrators"
          value={adminCount}
          icon={<ShieldCheck className="size-5" />}
          iconClass="bg-blue-500/10 text-blue-600 dark:text-blue-400"
        />
        <SummaryCard
          title="Service Workers"
          value={workerCount}
          icon={<Wrench className="size-5" />}
          iconClass="bg-orange-500/10 text-orange-600 dark:text-orange-400"
        />
      </div>

      {/* Main table */}
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="flex flex-col gap-4 border-b p-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-semibold">Registered Users</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Review accounts and update their access permissions.
            </p>
          </div>

          <div className="relative w-full sm:max-w-sm">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search name or email..."
              className="pl-9"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40 hover:bg-muted/40">
                <TableHead className="min-w-[220px] px-5">User</TableHead>
                <TableHead className="min-w-[240px]">Email Address</TableHead>
                <TableHead className="min-w-[130px]">Status</TableHead>
                <TableHead className="min-w-[160px]">Current Role</TableHead>
                <TableHead className="min-w-[210px]">Manage Role</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {isLoading ? (
                <TableRow>
                  <TableCell colSpan={5} className="h-48 text-center">
                    <LoaderCircle className="mx-auto size-7 animate-spin text-primary" />
                    <p className="mt-3 text-sm text-muted-foreground">
                      Loading users...
                    </p>
                  </TableCell>
                </TableRow>
              ) : isError ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="h-40 text-center text-sm text-destructive"
                  >
                    Failed to load users. Please refresh and try again.
                  </TableCell>
                </TableRow>
              ) : filteredUsers.length > 0 ? (
                filteredUsers.map((user) => {
                  const isSuperAdmin = user.role === "SUPER_ADMIN";
                  const isUpdating =
                    updateRoleMutation.isPending &&
                    updateRoleMutation.variables?.id === user.id;

                  return (
                    <TableRow
                      key={user.id}
                      className="transition-colors hover:bg-muted/30"
                    >
                      <TableCell className="px-5 py-4">
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border bg-muted text-sm font-bold uppercase">
                            {user.name?.charAt(0) || "U"}
                          </div>
                          <div className="min-w-0">
                            <p className="max-w-[200px] truncate font-semibold">
                              {user.name || "Unnamed User"}
                            </p>
                            <p className="mt-1 text-xs text-muted-foreground">
                              Account holder
                            </p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Mail className="size-4 shrink-0" />
                          <span className="truncate">{user.email}</span>
                        </div>
                      </TableCell>

                      <TableCell>
                        <StatusBadge status={user.status} />
                      </TableCell>

                      <TableCell>
                        <RoleBadge role={user.role} />
                      </TableCell>

                      <TableCell>
                        {isSuperAdmin ? (
                          <div className="inline-flex items-center gap-2 rounded-lg border bg-muted/40 px-3 py-2 text-xs font-medium text-muted-foreground">
                            <ShieldCheck className="size-4" />
                            Protected account
                          </div>
                        ) : (
                          <Select
                            value={user.role}
                            disabled={
                              isUpdating || updateRoleMutation.isPending
                            }
                            onValueChange={(value) => {
                              if (value === user.role) return;
                              handleRoleChange(user.id, value as UserRole);
                            }}
                          >
                            <SelectTrigger className="w-[190px] bg-background">
                              {isUpdating ? (
                                <span className="flex items-center gap-2">
                                  <LoaderCircle className="size-4 animate-spin" />
                                  Updating...
                                </span>
                              ) : (
                                <SelectValue placeholder="Change role" />
                              )}
                            </SelectTrigger>

                            <SelectContent>
                              <SelectItem value="CITIZEN">
                                <span className="flex items-center gap-2">
                                  <UserRound className="size-4" />
                                  Citizen
                                </span>
                              </SelectItem>
                              <SelectItem value="SERVICE_WORKER">
                                <span className="flex items-center gap-2">
                                  <Wrench className="size-4" />
                                  Service Worker
                                </span>
                              </SelectItem>
                              <SelectItem value="ADMIN">
                                <span className="flex items-center gap-2">
                                  <ShieldCheck className="size-4" />
                                  Admin
                                </span>
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-48 text-center">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-muted">
                        {search ? (
                          <Search className="size-6 text-muted-foreground" />
                        ) : (
                          <UserRound className="size-6 text-muted-foreground" />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold">
                          {search ? "No matching users" : "No users found"}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {search
                            ? "Try searching with another name or email."
                            : "Registered users will appear here."}
                        </p>
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        {/* Table footer */}
        <div className="flex flex-col gap-2 border-t bg-muted/20 px-5 py-3 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>
            Showing {filteredUsers.length} of {users.length} users
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-emerald-600" />
            Role changes are saved to the server
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

function SummaryCard({
  title,
  value,
  icon,
  iconClass,
}: {
  title: string;
  value: number;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <div className="rounded-2xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <div
          className={`flex size-10 items-center justify-center rounded-xl ${iconClass}`}
        >
          {icon}
        </div>
      </div>
      <p className="mt-4 text-3xl font-bold tracking-tight">{value}</p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const isActive = status === "ACTIVE";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        isActive
          ? "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400"
          : "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400"
      }`}
    >
      {isActive ? (
        <CheckCircle2 className="size-3.5" />
      ) : (
        <Ban className="size-3.5" />
      )}
      {status}
    </span>
  );
}

function RoleBadge({ role }: { role: TUsers["role"] }) {
  if (role === "SUPER_ADMIN") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs font-semibold text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-400">
        <ShieldCheck className="size-3.5" />
        Super Admin
      </span>
    );
  }

  if (role === "ADMIN") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-400">
        <ShieldCheck className="size-3.5" />
        Admin
      </span>
    );
  }

  if (role === "SERVICE_WORKER") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-400">
        <Wrench className="size-3.5" />
        Service Worker
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
      <UserRound className="size-3.5" />
      Citizen
    </span>
  );
}
