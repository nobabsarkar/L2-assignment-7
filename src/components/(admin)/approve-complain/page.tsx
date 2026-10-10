"use client";

import { useGetAllComplain } from "@/hooks/complain.hook";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Loader2, CreditCard, FileText } from "lucide-react";
import { useCreatePayment } from "@/hooks/user.hook";

const ApproveData = () => {
  const { data, isPending } = useGetAllComplain();

  const { mutate: payments } = useCreatePayment();

  const complains = data?.data ?? [];

  const handlePayNow = (complainId: string) => {
    payments({
      payment: complainId,
    });
  };

  if (isPending) {
    return (
      <div className="flex min-h-[300px] items-center justify-center">
        <Loader2 className="size-8 animate-spin text-primary" />
      </div>
    );
  }

  const approvedComplains = complains.filter((complain: { status: string }) =>
    ["APPROVED", "REJECTED"].includes(complain.status),
  );

  return (
    <Card className="w-full overflow-hidden border-border/60 shadow-sm">
      <CardHeader className="border-b bg-muted/20">
        <CardTitle className="flex items-center gap-2 text-xl">
          <FileText className="size-5 text-primary" />
          Complain Approval Status
        </CardTitle>
        <CardDescription>
          View your approved and rejected complains and manage payments.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        {approvedComplains.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-4 py-16 text-center">
            <div className="mb-4 rounded-full bg-muted p-4">
              <FileText className="size-8 text-muted-foreground" />
            </div>
            <h3 className="font-semibold">No approval data yet</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Approved or rejected complains will appear here.
            </p>
          </div>
        ) : (
          <div className="w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="bg-muted/30">
                  <TableHead className="min-w-[220px]">Complain</TableHead>
                  <TableHead className="min-w-[200px]">Location</TableHead>
                  <TableHead className="min-w-[110px]">Price</TableHead>
                  <TableHead className="min-w-[130px]">Status</TableHead>
                  <TableHead className="min-w-[150px] text-right">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {approvedComplains.map(
                  (complain: {
                    id: string;
                    title: string;
                    location: string;
                    price: number;
                    status: string;
                  }) => (
                    <TableRow
                      key={complain.id}
                      className="transition-colors hover:bg-muted/20"
                    >
                      <TableCell>
                        <p className="font-medium">{complain.title}</p>
                        <p className="mt-1 text-xs text-muted-foreground"></p>
                      </TableCell>

                      <TableCell className="text-sm text-muted-foreground">
                        {complain.location}
                      </TableCell>

                      <TableCell className="font-semibold tabular-nums">
                        ${Number(complain.price).toLocaleString("en-BD")}
                      </TableCell>

                      <TableCell>
                        {complain.status === "APPROVED" ? (
                          <Badge className="border-0 bg-emerald-100 text-emerald-700 hover:bg-emerald-100 dark:bg-emerald-950 dark:text-emerald-300">
                            Approved
                          </Badge>
                        ) : (
                          <Badge variant="destructive">Rejected</Badge>
                        )}
                      </TableCell>

                      <TableCell className="text-right">
                        {complain.status === "APPROVED" ? (
                          <Button
                            className="cursor-pointer"
                            size="sm"
                            onClick={() => handlePayNow(complain.id)}
                            disabled={Number(complain.price) <= 0}
                          >
                            <CreditCard className="mr-2 size-4" />
                            Pay Now
                          </Button>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            No action required
                          </span>
                        )}
                      </TableCell>
                    </TableRow>
                  ),
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ApproveData;
