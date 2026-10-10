"use client";

import { useGetUserPayments } from "@/hooks/user.hook";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CreditCard, ReceiptText, RefreshCw } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";

const PaymentsCard = () => {
  const {
    data: paymentResponse,
    isPending,
    isError,
    refetch,
  } = useGetUserPayments();

  const payments = paymentResponse?.data ?? [];

  const formatAmount = (amount: number | string) =>
    `$${Number(amount).toLocaleString("en-BD", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`;

  const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });

  const getStatusStyle = (status: string) => {
    switch (status?.toUpperCase()) {
      case "SUCCESS":
      case "PAID":
      case "COMPLETED":
      case "VALID":
        return "border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-400";
      case "PENDING":
      case "INITIATED":
        return "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-400";
      case "FAILED":
      case "CANCELLED":
      case "CANCELED":
      case "INVALID":
        return "border-red-200 bg-red-50 text-red-700 dark:border-red-900 dark:bg-red-950 dark:text-red-400";
      default:
        return "border-border bg-muted text-muted-foreground";
    }
  };

  if (isPending) {
    return (
      <div className="flex min-h-64 items-center justify-center">
        <div className="flex items-center gap-3 text-muted-foreground">
          <Spinner />
          <span>Loading...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 rounded-xl border p-8 text-center">
        <CreditCard className="size-10 text-muted-foreground" />
        <h2 className="font-semibold">Unable to load payments</h2>
        <p className="text-sm text-muted-foreground">
          Please check your connection and try again.
        </p>
        <Button variant="outline" onClick={() => refetch()}>
          <RefreshCw className="mr-2 size-4" />
          Try Again
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-7xl space-y-6 p-4 sm:p-6 lg:p-8">
      {/* Payment Table */}
      <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
        <div className="border-b px-5 py-4">
          <h2 className="font-semibold">Your Transactions</h2>
        </div>

        {payments.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
            <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-muted">
              <ReceiptText className="size-7 text-muted-foreground" />
            </div>
            <h3 className="font-semibold">No payments yet</h3>
            <p className="mt-2 max-w-sm text-sm text-muted-foreground">
              Your payment transactions will appear here after you make a
              payment.
            </p>
          </div>
        ) : (
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="whitespace-nowrap">#</TableHead>
                  <TableHead className="min-w-64">Transaction ID</TableHead>
                  <TableHead className="whitespace-nowrap">Amount</TableHead>
                  <TableHead className="whitespace-nowrap">Status</TableHead>
                  <TableHead className="whitespace-nowrap">
                    Payment Date
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {payments.map(
                  (
                    payment: {
                      id: string;
                      transactionId?: string;
                      amount?: number | string;
                      status?: string;
                      createdAt?: string;
                    },
                    index: number,
                  ) => (
                    <TableRow key={payment.id}>
                      <TableCell className="text-muted-foreground">
                        {index + 1}
                      </TableCell>

                      <TableCell>
                        <span className="font-mono text-xs sm:text-sm">
                          {payment.transactionId ?? payment.id}
                        </span>
                      </TableCell>

                      <TableCell className="whitespace-nowrap font-semibold">
                        {formatAmount(payment.amount ?? 0)}
                      </TableCell>

                      <TableCell>
                        <Badge
                          variant="outline"
                          className={getStatusStyle(payment.status ?? "")}
                        >
                          {payment.status ?? "UNKNOWN"}
                        </Badge>
                      </TableCell>

                      <TableCell className="whitespace-nowrap text-sm text-muted-foreground">
                        {payment.createdAt
                          ? formatDate(payment.createdAt)
                          : "—"}
                      </TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentsCard;
