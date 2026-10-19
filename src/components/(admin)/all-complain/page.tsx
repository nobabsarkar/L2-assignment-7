/** biome-ignore-all lint/a11y/noLabelWithoutControl: <explanation> */
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Check,
  X,
  MapPin,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
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

import {
  useAdminGetAllComplain,
  useAdminUpdateStatus,
} from "@/hooks/complain.hook";

import type { ComplainPayload } from "@/types/complain.type";

const PAGE_SIZE = 10;

export type ComplainQuery = {
  searchTerm: string;
  status: string;
  location: string;
  minPrice: string;
  maxPrice: string;
  sortBy: string;
  sortOrder: "asc" | "desc";
  page: number;
  limit: number;
};

const initialFilters = {
  searchTerm: "",
  location: "",
  status: "ALL",
  minPrice: "",
  maxPrice: "",
  sortBy: "createdAt",
  sortOrder: "desc" as "asc" | "desc",
};

const AdminGetAllComplain = () => {
  const [filters, setFilters] = useState(initialFilters);
  const [page, setPage] = useState(1);

  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<
    "APPROVED" | "REJECTED" | null
  >(null);

  const query: ComplainQuery = {
    ...filters,
    status: filters.status === "ALL" ? "" : filters.status,
    page,
    limit: PAGE_SIZE,
  };

  const { data, isLoading, isFetching, isError } =
    useAdminGetAllComplain(query);

  const { mutate: updateStatus, isPending } = useAdminUpdateStatus();

  const response = data?.data?.data;

  const complains: ComplainPayload[] = Array.isArray(response) ? response : [];

  const meta = data?.data?.meta;

  const total = Number(meta?.total ?? 0);
  const totalPages = Number(meta?.totalPages ?? 0);
  const currentPage = Number(meta?.page ?? page);

  const updateFilter = (key: keyof typeof initialFilters, value: string) => {
    setFilters((previous) => ({
      ...previous,
      [key]: value,
    }));
    setPage(1);
  };

  const resetFilters = () => {
    setFilters({ ...initialFilters });
    setPage(1);
  };

  const handleStatusClick = (id: string, status: "APPROVED" | "REJECTED") => {
    setSelectedId(id);
    setSelectedStatus(status);
  };

  const handleConfirmStatus = () => {
    if (!selectedId || !selectedStatus) return;

    updateStatus(
      {
        id: selectedId,
        status: selectedStatus,
      },
      {
        onSuccess: () => {
          setSelectedId(null);
          setSelectedStatus(null);
        },
      },
    );
  };

  const formatPrice = (price: number | null | undefined) => {
    if (price == null) return "—";

    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 2,
    }).format(price);
  };

  const statusStyles: Record<string, string> = {
    PENDING:
      "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
    APPROVED:
      "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300",
    REJECTED: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300",
    RESOLVED: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300",
  };

  return (
    <div className="mx-auto w-full max-w-screen-2xl space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Page heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            All Complains
          </h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Manage, filter, and track citizen complains.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start rounded-xl border bg-card px-4 py-3 shadow-sm">
          <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <SlidersHorizontal className="size-5" />
          </div>

          <div>
            <p className="text-xs text-muted-foreground">Total complains</p>
            <p className="text-xl font-bold tabular-nums">
              {total.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Search and filters */}
      <div className="rounded-xl border bg-card p-4 shadow-sm sm:p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {/* Search */}
          <div className="space-y-2 sm:col-span-2">
            <label htmlFor="complain-search" className="text-sm font-medium">
              Search complains
            </label>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="complain-search"
                placeholder="Search title or location..."
                value={filters.searchTerm}
                onChange={(event) =>
                  updateFilter("searchTerm", event.target.value)
                }
                className="pl-9"
              />
            </div>
          </div>

          {/* Status */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Status</label>

            <Select
              value={filters.status}
              onValueChange={(value) => {
                if (value !== null) {
                  updateFilter("status", value);
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All statuses" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="ALL">All statuses</SelectItem>
                <SelectItem value="PENDING">Pending</SelectItem>
                <SelectItem value="APPROVED">Approved</SelectItem>
                <SelectItem value="REJECTED">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label htmlFor="complain-location" className="text-sm font-medium">
              Location
            </label>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="complain-location"
                placeholder="Enter location..."
                value={filters.location}
                onChange={(event) =>
                  updateFilter("location", event.target.value)
                }
                className="pl-9"
              />
            </div>
          </div>

          {/* Minimum price */}
          <div className="space-y-2">
            <label htmlFor="min-price" className="text-sm font-medium">
              Minimum price
            </label>

            <Input
              id="min-price"
              type="number"
              min="0"
              placeholder="Min price"
              value={filters.minPrice}
              onChange={(event) => updateFilter("minPrice", event.target.value)}
            />
          </div>

          {/* Maximum price */}
          <div className="space-y-2">
            <label htmlFor="max-price" className="text-sm font-medium">
              Maximum price
            </label>

            <Input
              id="max-price"
              type="number"
              min="0"
              placeholder="Max price"
              value={filters.maxPrice}
              onChange={(event) => updateFilter("maxPrice", event.target.value)}
            />
          </div>

          {/* Sort field */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Sort by</label>

            <Select
              value={filters.sortBy}
              onValueChange={(value) => {
                if (value !== null) {
                  updateFilter("sortBy", value);
                }
              }}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="createdAt">Date created</SelectItem>
                <SelectItem value="price">Price</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Sort direction */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Sort order</label>

            <Select
              value={filters.sortOrder}
              onValueChange={(value) =>
                updateFilter("sortOrder", value as "asc" | "desc")
              }
            >
              <SelectTrigger className="w-full">
                <ArrowUpDown className="mr-2 size-4 text-muted-foreground" />
                <SelectValue placeholder="Sort order" />
              </SelectTrigger>

              <SelectContent>
                <SelectItem value="desc">
                  {filters.sortBy === "price" ? "High to low" : "Newest first"}
                </SelectItem>
                <SelectItem value="asc">
                  {filters.sortBy === "price" ? "Low to high" : "Oldest first"}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Complains table */}
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="flex flex-col gap-2 border-b p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
          <div>
            <h2 className="font-semibold">Complain records</h2>
            <p className="text-sm text-muted-foreground">
              Review details and manage complain status.
            </p>
          </div>

          {isFetching && !isLoading && (
            <span className="flex items-center gap-2 text-xs text-muted-foreground">
              <Spinner />
              Updating results...
            </span>
          )}
        </div>

        {isLoading ? (
          <div className="flex min-h-64 items-center justify-center gap-3 text-sm text-muted-foreground">
            <Spinner />
            Loading complains...
          </div>
        ) : isError ? (
          <div className="flex min-h-64 flex-col items-center justify-center gap-3 p-6 text-center">
            <p className="font-medium text-destructive">
              Failed to load complains.
            </p>
            <p className="text-sm text-muted-foreground">
              Please check your connection and try again.
            </p>
          </div>
        ) : (
          <>
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/40 hover:bg-muted/40">
                    <TableHead className="min-w-56">Complain</TableHead>
                    <TableHead className="min-w-40">Location</TableHead>
                    <TableHead className="min-w-28">Price</TableHead>
                    <TableHead className="min-w-24">Status</TableHead>
                    <TableHead className="min-w-28">Image</TableHead>
                    <TableHead className="min-w-28 text-center">
                      Details
                    </TableHead>
                    <TableHead className="min-w-56 text-center">
                      Actions
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {complains.length > 0 ? (
                    complains.map((item) => (
                      <TableRow
                        key={item.id}
                        className="transition-colors hover:bg-muted/30"
                      >
                        <TableCell>
                          <div className="max-w-64">
                            <p className="truncate font-medium">{item.title}</p>
                          </div>
                        </TableCell>

                        <TableCell>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="size-4 shrink-0" />
                            <span className="max-w-48 truncate">
                              {item.location || "Not specified"}
                            </span>
                          </div>
                        </TableCell>

                        <TableCell className="font-medium tabular-nums">
                          {formatPrice(item.price)}
                        </TableCell>

                        <TableCell>
                          <span
                            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${
                              statusStyles[item.status] ??
                              "bg-muted text-muted-foreground"
                            }`}
                          >
                            {item.status}
                          </span>
                        </TableCell>

                        <TableCell>
                          <div className="relative size-12 overflow-hidden rounded-lg border bg-muted">
                            <Image
                              src={item.imageUrl || "/placeholder.png"}
                              alt={item.title}
                              fill
                              sizes="48px"
                              className="object-cover"
                            />
                          </div>
                        </TableCell>

                        <TableCell className="text-center">
                          <Button
                            size="sm"
                            variant="outline"
                            className="cursor-pointer"
                          >
                            <Link
                              className="flex items-center"
                              href={`/admin/all-complain/${item.id}`}
                            >
                              <Eye className="mr-1.5 size-4" />
                              Details
                            </Link>
                          </Button>
                        </TableCell>

                        <TableCell>
                          {item.status === "PENDING" ? (
                            <div className="flex flex-wrap items-center justify-center gap-2">
                              <Button
                                size="sm"
                                variant="outline"
                                disabled={isPending}
                                onClick={() =>
                                  handleStatusClick(item.id, "APPROVED")
                                }
                                className="cursor-pointer border-emerald-300 text-emerald-700 hover:bg-emerald-50 hover:text-emerald-800 dark:border-emerald-800 dark:text-emerald-400 dark:hover:bg-emerald-950"
                              >
                                <Check className="mr-1 size-4" />
                                Approve
                              </Button>

                              <Button
                                size="sm"
                                variant="outline"
                                disabled={isPending}
                                onClick={() =>
                                  handleStatusClick(item.id, "REJECTED")
                                }
                                className="cursor-pointer border-red-300 text-red-700 hover:bg-red-50 hover:text-red-800 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950"
                              >
                                <X className="mr-1 size-4" />
                                Reject
                              </Button>
                            </div>
                          ) : item.status === "APPROVED" ? (
                            <div className="flex justify-center">
                              <span className="flex items-center gap-1 text-xs font-medium text-emerald-700 dark:text-emerald-400">
                                <Check className="size-4" />
                                Approved
                              </span>
                            </div>
                          ) : item.status === "REJECTED" ? (
                            <div className="flex justify-center">
                              <span className="flex items-center gap-1 text-xs font-medium text-red-700 dark:text-red-400">
                                <X className="size-4" />
                                Rejected
                              </span>
                            </div>
                          ) : (
                            <div className="text-center text-xs text-muted-foreground">
                              No action required
                            </div>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell colSpan={7} className="h-48 text-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="flex size-12 items-center justify-center rounded-full bg-muted">
                            <Search className="size-5 text-muted-foreground" />
                          </div>
                          <p className="font-medium">No complains found</p>
                          <p className="text-sm text-muted-foreground">
                            Try changing your search or filters.
                          </p>
                          <Button
                            variant="link"
                            onClick={resetFilters}
                            className="cursor-pointer"
                          >
                            Clear all filters
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            <div className="flex flex-col gap-4 border-t p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <p className="text-sm text-muted-foreground">
                Page{" "}
                <span className="font-semibold text-foreground">
                  {currentPage}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-foreground">
                  {totalPages}
                </span>
                <span className="mx-2">·</span>
                {total.toLocaleString()} total records
              </p>

              <div className="flex items-center justify-between gap-2 sm:justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  disabled={page <= 1 || isFetching}
                  onClick={() => setPage((previous) => previous - 1)}
                  className="cursor-pointer"
                >
                  <ChevronLeft className="mr-1 size-4" />
                  Previous
                </Button>

                <span className="min-w-16 text-center text-sm font-medium tabular-nums">
                  {currentPage} / {Math.max(totalPages, 1)}
                </span>

                <Button
                  variant="outline"
                  size="sm"
                  disabled={
                    totalPages === 0 || page >= totalPages || isFetching
                  }
                  onClick={() => setPage((previous) => previous + 1)}
                  className="cursor-pointer"
                >
                  Next
                  <ChevronRight className="ml-1 size-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Approve / Reject confirmation */}
      <AlertDialog
        open={Boolean(selectedId)}
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
                ? "Are you sure you want to approve this complain? This will move it to the next stage."
                : "Are you sure you want to reject this complain? This will mark it as rejected."}
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel disabled={isPending} className="cursor-pointer">
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              disabled={isPending}
              onClick={(event) => {
                event.preventDefault();
                handleConfirmStatus();
              }}
              className={`cursor-pointer ${
                selectedStatus === "APPROVED"
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-red-600 hover:bg-red-700"
              }`}
            >
              {isPending ? (
                <>
                  <Spinner />
                  Processing...
                </>
              ) : selectedStatus === "APPROVED" ? (
                "Yes, approve"
              ) : (
                "Yes, reject"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AdminGetAllComplain;
