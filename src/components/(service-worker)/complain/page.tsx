"use client";

import { CalendarDays, MapPin, UserRound } from "lucide-react";

import { useAssignData } from "@/hooks/assign.hook";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ComplainData = () => {
  const { data, isPending, isError } = useAssignData();

  const assignments = data?.data ?? [];

  if (isPending) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <p className="animate-pulse text-sm text-muted-foreground">
          Loading assignment data...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border p-8 text-center">
        <h2 className="font-semibold text-destructive">
          Failed to load assignments
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            Assigned Complains
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Monitor complains and their assigned service workers.
          </p>
        </div>

        <Badge variant="secondary" className="w-fit px-3 py-1">
          Total Assignments: {assignments.length}
        </Badge>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-14">#</TableHead>
                <TableHead>Complain</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Service Worker</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Assigned Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {assignments.length > 0 ? (
                assignments.map((item: any, index: number) => (
                  <TableRow key={item.id} className="hover:bg-muted/30">
                    <TableCell className="font-medium text-muted-foreground">
                      {index + 1}
                    </TableCell>

                    <TableCell>
                      <div className="min-w-40">
                        <p className="font-semibold">
                          {item.complain?.title ?? "Untitled Complain"}
                        </p>
                        <p className="mt-1 max-w-56 truncate text-xs text-muted-foreground">
                          {item.complain?.description ?? "No description"}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex min-w-32 items-center gap-2 text-sm">
                        <MapPin className="size-4 shrink-0 text-muted-foreground" />
                        <span>
                          {item.complain?.location ?? "Not specified"}
                        </span>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex min-w-36 items-center gap-2">
                        <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <UserRound className="size-4 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">
                            {item.serviceWorker?.name ?? "Not assigned"}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.serviceWorker?.email ?? ""}
                          </p>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant={
                          item.status === "COMPLETED"
                            ? "default"
                            : item.status === "PENDING"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {item.status ?? "UNKNOWN"}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      <div className="flex min-w-32 items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays className="size-4 shrink-0" />
                        <span>
                          {item.createdAt
                            ? new Date(item.createdAt).toLocaleDateString(
                                "en-GB",
                                {
                                  day: "2-digit",
                                  month: "short",
                                  year: "numeric",
                                },
                              )
                            : "N/A"}
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-32 text-center">
                    <p className="font-medium">No assignments found</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Assigned complains will appear here.
                    </p>
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

export default ComplainData;
