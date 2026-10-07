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
import { useGetAllComplain } from "@/hooks/complain.hook";
import { ComplainPayload } from "@/types/complain.type";
import { Eye, Pencil, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AllComplain = () => {
  const { data, isLoading, isError } = useGetAllComplain();

  if (isLoading) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-muted-foreground">Loading complains...</p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <p className="text-sm text-destructive">Failed to load complaints.</p>
      </div>
    );
  }

  const complains = data?.data ?? [];

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
                    key={item?.id}
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

                    <TableCell>
                      <Image
                        src={item?.imageUrl || ""}
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
                    colSpan={6}
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
    </div>
  );
};

export default AllComplain;
