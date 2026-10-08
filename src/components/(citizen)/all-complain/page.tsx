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
import { useDeleteComplain, useGetAllComplain } from "@/hooks/complain.hook";
import { ComplainPayload } from "@/types/complain.type";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllComplainCard = () => {
  const { data, isLoading, isError } = useGetAllComplain();

  const { mutate: deleteData, isPending: isDeleting } = useDeleteComplain();

  // Which complaint should be deleted
  const [deleteId, setDeleteId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        {" "}
        <p className="text-sm text-muted-foreground">
          {" "}
          <Spinner /> Loading...{" "}
        </p>{" "}
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        {" "}
        <p className="text-sm text-destructive">
          Failed to load complaints.{" "}
        </p>{" "}
      </div>
    );
  }

  const complains = data?.data ?? [];

  const handleDelete = (id: string) => {
    deleteData({ id });
  };

  return (
    <div className="w-full space-y-4">
      {/* Table */}{" "}
      <div className="w-full overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50 hover:bg-muted/50">
                <TableHead className="min-w-[220px] font-semibold">
                  Title{" "}
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
                  Update
                </TableHead>
                <TableHead className="min-w-[120px] text-center font-semibold">
                  Delete
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
                      <Link href={`/citizen/all-complain/${item.id}`}>
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

                    {/* Update */}
                    <TableCell className="text-center">
                      <Link href={`/citizen/all-complain/update/${item.id}`}>
                        <Button
                          size="sm"
                          variant="outline"
                          className="
                        cursor-pointer
                        border-amber-200
                        text-amber-600
                        hover:bg-amber-50
                        hover:text-amber-700
                        dark:border-amber-900
                        dark:text-amber-400
                        dark:hover:bg-amber-950
                      "
                        >
                          <Pencil className="mr-1.5 size-4" />
                          Update
                        </Button>
                      </Link>
                    </TableCell>

                    {/* Delete */}
                    <TableCell className="text-center">
                      <Button
                        onClick={() => setDeleteId(item.id)}
                        size="sm"
                        variant="outline"
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
                        <Trash2 className="mr-1.5 size-4" />
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={7}
                    className="h-32 text-center text-muted-foreground"
                  >
                    No complaints found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
      {/* Delete Confirmation Dialog */}
      <AlertDialog
        open={!!deleteId}
        onOpenChange={(open) => {
          if (!open) {
            setDeleteId(null);
          }
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              Are you sure you want to delete this data?
            </AlertDialogTitle>

            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete this
              complain.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer" disabled={isDeleting}>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              className="cursor-pointer"
              disabled={isDeleting}
              onClick={() => {
                if (deleteId) {
                  handleDelete(deleteId);
                  setDeleteId(null);
                }
              }}
            >
              {isDeleting ? (
                <>
                  <Spinner />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AllComplainCard;
