"use client";

import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Spinner } from "@/components/ui/spinner";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useAdminGetAllComplain,
  useAdminUpdateStatus,
} from "@/hooks/complain.hook";
import { ComplainPayload } from "@/types/complain.type";
import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AdminGetAllComplain = () => {
  const { data, isLoading, isError } = useAdminGetAllComplain();

  const { mutate: updateStatus, isPending } = useAdminUpdateStatus();

  const [approveId, setApproveId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="flex items-center gap-2 text-sm text-muted-foreground">
          <Spinner />
          Loading...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-destructive">Failed to load complains.</p>
      </div>
    );
  }

  const complains = data?.data ?? [];

  const handleApproveClick = (id: string) => {
    setApproveId(id);
  };

  const handleConfirmApprove = () => {
    if (!approveId) return;

    updateStatus(
      {
        id: approveId,
        status: "APPROVED",
      },
      {
        onSuccess: (data) => {
          console.log("SUCCESS:", data);
          setApproveId(null);
        },
        onError: (error) => {
          console.log("ERROR:", error);
          setApproveId(null);
        },
      },
    );
  };

  return (
    <div className="w-full space-y-4">
      {/* Table */}
      <div className="w-full overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="min-w-[220px] font-semibold">
                  Title
                </TableHead>

                <TableHead className="min-w-[200px] font-semibold">
                  Location
                </TableHead>

                <TableHead className="min-w-[120px] font-semibold">
                  Price
                </TableHead>

                <TableHead className="min-w-[120px] font-semibold">
                  Image
                </TableHead>

                <TableHead className="min-w-[120px] text-center font-semibold">
                  Details
                </TableHead>

                <TableHead className="min-w-[120px] text-center font-semibold">
                  Status
                </TableHead>

                <TableHead className="min-w-[140px] text-center font-semibold">
                  Approve Status
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {complains.length > 0 ? (
                complains.map((item: ComplainPayload) => (
                  <TableRow
                    key={item.id}
                    className="transition-colors hover:bg-muted/30"
                  >
                    {/* Title */}
                    <TableCell className="font-medium">{item.title}</TableCell>

                    {/* Location */}
                    <TableCell className="text-muted-foreground">
                      {item.location}
                    </TableCell>

                    {/* Price */}
                    <TableCell className="font-semibold">
                      ${item.price}
                    </TableCell>

                    {/* Image */}
                    <TableCell>
                      <Image
                        src={item.imageUrl || "/placeholder.png"}
                        alt={item.title}
                        width={40}
                        height={40}
                        className="size-12 rounded-lg object-cover"
                      />
                    </TableCell>

                    {/* Details */}
                    <TableCell className="text-center">
                      <Link href={`/admin/all-complain/${item.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="
                            cursor-pointer
                            border-blue-200
                            text-blue-600
                            hover:bg-blue-50
                            hover:text-blue-700
                            dark:border-blue-900
                            dark:text-blue-400
                            dark:hover:bg-blue-950
                          "
                        >
                          <Eye className="mr-1.5 size-4" />
                          Details
                        </Button>
                      </Link>
                    </TableCell>

                    {/* Status */}
                    <TableCell className="text-center">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          item.status === "PENDING"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-950 dark:text-yellow-400"
                            : item.status === "APPROVED"
                              ? "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-400"
                              : item.status === "REJECTED"
                                ? "bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400"
                                : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </TableCell>

                    {/* Approve */}
                    <TableCell className="text-center">
                      {item.status === "APPROVED" ? (
                        <span className="inline-flex rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700 dark:bg-green-950 dark:text-green-400">
                          Approved
                        </span>
                      ) : (
                        <Button
                          onClick={() => handleApproveClick(item.id)}
                          size="sm"
                          variant="outline"
                          className="
                            cursor-pointer
                            border-blue-200
                            text-blue-600
                            hover:bg-blue-50
                            hover:text-blue-700
                            dark:border-blue-900
                            dark:text-blue-400
                            dark:hover:bg-blue-950
                          "
                          disabled={isPending && approveId === item.id}
                        >
                          {isPending && approveId === item.id
                            ? "Approving..."
                            : "Approve"}
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="h-32 text-center text-muted-foreground"
                  >
                    No complains found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>

      {/* Approve Confirmation Dialog */}
      <AlertDialog
        open={!!approveId}
        onOpenChange={(open) => {
          if (!open && !isPending) {
            setApproveId(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to approve this complain?
            </AlertDialogTitle>

            <AlertDialogDescription>
              Once approved, this complain will be marked as approved and the
              citizen can continue with the next step.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer" disabled={isPending}>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              className="cursor-pointer"
              onClick={handleConfirmApprove}
              disabled={isPending}
            >
              {isPending ? "Approving..." : "Yes, Approve"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminGetAllComplain;
