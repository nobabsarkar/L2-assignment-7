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
import { Check, Eye, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AdminGetAllComplain = () => {
  const { data, isLoading, isError } = useAdminGetAllComplain();

  const { mutate: updateStatus, isPending } = useAdminUpdateStatus();

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<
    "APPROVED" | "REJECTED" | null
  >(null);

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

  // Open confirmation dialog
  const handleStatusClick = (id: string, status: "APPROVED" | "REJECTED") => {
    setSelectedId(id);
    setSelectedStatus(status);
  };

  // Confirm status update
  const handleConfirmStatus = () => {
    if (!selectedId || !selectedStatus) return;

    updateStatus(
      {
        id: selectedId,
        status: selectedStatus,
      },
      {
        onSuccess: (data) => {
          console.log("SUCCESS:", data);

          setSelectedId(null);
          setSelectedStatus(null);
        },

        onError: (error) => {
          console.log("ERROR:", error);
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

                <TableHead className="min-w-[180px] text-center font-semibold">
                  Action
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
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
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

                    {/* Action */}
                    <TableCell>
                      {item.status === "PENDING" && (
                        <div className="flex items-center justify-center gap-2">
                          {/* Approve */}
                          <Button
                            onClick={() =>
                              handleStatusClick(item.id, "APPROVED")
                            }
                            size="sm"
                            variant="outline"
                            disabled={isPending && selectedId === item.id}
                            className="
                              cursor-pointer
                              border-green-200
                              text-green-600
                              hover:bg-green-50
                              hover:text-green-700
                              dark:border-green-900
                              dark:text-green-400
                              dark:hover:bg-green-950
                            "
                          >
                            <Check className="mr-1.5 size-4" />

                            {isPending &&
                            selectedId === item.id &&
                            selectedStatus === "APPROVED"
                              ? "Approving..."
                              : "Approve"}
                          </Button>

                          {/* Reject */}
                          <Button
                            onClick={() =>
                              handleStatusClick(item.id, "REJECTED")
                            }
                            size="sm"
                            variant="outline"
                            disabled={isPending && selectedId === item.id}
                            className="
                              cursor-pointer
                              border-red-200
                              text-red-600
                              hover:bg-red-50
                              hover:text-red-700
                              dark:border-red-900
                              dark:text-red-400
                              dark:hover:bg-red-950
                            "
                          >
                            <X className="mr-1.5 size-4" />

                            {isPending &&
                            selectedId === item.id &&
                            selectedStatus === "REJECTED"
                              ? "Rejecting..."
                              : "Reject"}
                          </Button>
                        </div>
                      )}

                      {item.status === "APPROVED" && (
                        <div className="flex justify-center">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-950 dark:text-green-400">
                            <Check className="size-3.5" />
                            Approved
                          </span>
                        </div>
                      )}

                      {item.status === "REJECTED" && (
                        <div className="flex justify-center">
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 dark:bg-red-950 dark:text-red-400">
                            <X className="size-3.5" />
                            Rejected
                          </span>
                        </div>
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

      {/* Confirmation Dialog */}
      <AlertDialog
        open={!!selectedId}
        onOpenChange={(open) => {
          if (!open && !isPending) {
            setSelectedId(null);
            setSelectedStatus(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {selectedStatus === "APPROVED"
                ? "Approve this complain?"
                : "Reject this complain?"}
            </AlertDialogTitle>

            <AlertDialogDescription>
              {selectedStatus === "APPROVED"
                ? "Are you sure you want to approve this complain? Once approved, the complain will move to the next stage."
                : "Are you sure you want to reject this complain? This action will mark the complain as rejected."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer" disabled={isPending}>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              onClick={handleConfirmStatus}
              disabled={isPending}
              className={
                selectedStatus === "APPROVED"
                  ? "cursor-pointer bg-green-600 hover:bg-green-700"
                  : "cursor-pointer bg-red-600 hover:bg-red-700"
              }
            >
              {isPending
                ? selectedStatus === "APPROVED"
                  ? "Approving..."
                  : "Rejecting..."
                : selectedStatus === "APPROVED"
                  ? "Yes, Approve Complain"
                  : "Yes, Reject Complain"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminGetAllComplain;
