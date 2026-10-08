"use client";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetAllUser, useUpdateUserStatus } from "@/hooks/user.hook";
import { TUsers } from "@/types/complain.type";
import {
  Ban,
  CheckCircle2,
  ShieldCheck,
  UserRound,
  Wrench,
} from "lucide-react";

const UserPage = () => {
  const { data } = useGetAllUser();

  const { mutate: updateUserStatus } = useUpdateUserStatus();

  const users: TUsers[] = data?.data ?? [];

  const handleUserStatus = (id: string, status: "ACTIVE" | "BLOCKED") => {
    updateUserStatus({
      id,
      status,
    });
  };

  return (
    <div className="w-full space-y-6">
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/40 hover:bg-muted/40">
                <TableHead className="min-w-[220px] font-semibold">
                  User
                </TableHead>

                <TableHead className="min-w-[240px] font-semibold">
                  Email
                </TableHead>

                <TableHead className="min-w-[130px] font-semibold">
                  Status
                </TableHead>

                <TableHead className="min-w-[170px] font-semibold">
                  Role
                </TableHead>

                <TableHead className="min-w-[150px] text-center font-semibold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {users.length > 0 ? (
                users.map((user: TUsers) => {
                  return (
                    <TableRow
                      key={user.id}
                      className="transition-colors hover:bg-muted/30"
                    >
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                            {user.name?.charAt(0).toUpperCase()}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate font-medium">{user.name}</p>

                            <p className="text-xs text-muted-foreground">
                              User Account
                            </p>
                          </div>
                        </div>
                      </TableCell>

                      <TableCell>
                        <span className="text-sm text-muted-foreground">
                          {user.email}
                        </span>
                      </TableCell>

                      <TableCell>
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-400">
                          <CheckCircle2 className="size-3.5" />
                          {user.status}
                        </span>
                      </TableCell>

                      <TableCell>
                        <RoleBadge role={user.role} />
                      </TableCell>

                      <TableCell>
                        <div className="flex items-center justify-center">
                          <Button
                            onClick={() => handleUserStatus(user.id, "BLOCKED")}
                            className="bg-red-500 text-white cursor-pointer"
                          >
                            <Ban className="size-4" />
                            Block
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-40 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <UserRound className="size-8 text-muted-foreground/50" />

                      <p className="text-sm font-medium">No users found</p>

                      <p className="text-xs text-muted-foreground">
                        There are no registered users.
                      </p>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default UserPage;

function RoleBadge({ role }: { role: TUsers["role"] }) {
  if (role === "SUPER_ADMIN") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-purple-200 bg-purple-50 px-2.5 py-1 text-xs font-medium text-purple-700 dark:border-purple-900 dark:bg-purple-950/40 dark:text-purple-400">
        <ShieldCheck className="size-3.5" />
        Super Admin
      </span>
    );
  }

  if (role === "ADMIN") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/40 dark:text-blue-400">
        <ShieldCheck className="size-3.5" />
        Admin
      </span>
    );
  }

  if (role === "SERVICE_WORKER") {
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-2.5 py-1 text-xs font-medium text-orange-700 dark:border-orange-900 dark:bg-orange-950/40 dark:text-orange-400">
        <Wrench className="size-3.5" />
        Service Worker
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
      <UserRound className="size-3.5" />
      Citizen
    </span>
  );
}
