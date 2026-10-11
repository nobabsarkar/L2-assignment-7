"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldGroup } from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";

import { useGetAllUser } from "@/hooks/user.hook";
import { useServiceWorkerAssign } from "@/hooks/assign.hook";
import { useAdminGetAllComplain } from "@/hooks/complain.hook";
import { toast } from "../ui/toast";

const DialogPage = () => {
  const { data } = useAdminGetAllComplain();

  const { data: users } = useGetAllUser();

  const [complainId, setComplainId] = useState("");
  const [serviceWorkerId, setServiceWorkerId] = useState("");
  const [open, setOpen] = useState(false);

  const serviceWorkers = users?.data?.filter(
    (user: any) => user.role === "SERVICE_WORKER",
  );

  const { mutate: serviceWorker, isPending } = useServiceWorkerAssign();

  const handleAssign = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    serviceWorker(
      {
        complainId,
        serviceWorkerId,
      },
      {
        onSuccess: (result) => {
          toast.add({
            title: "Service Worker Assign Successfully",
            description: "Well Done",
            type: "success",
          });

          setComplainId("");
          setServiceWorkerId("");
          setOpen(false);
        },
        onError: (error) => {
          console.error("Assign Failed:", error);
        },
      },
    );
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button type="button" className="cursor-pointer">
            Assign Service Worker
          </Button>
        }
      />

      <DialogContent className="sm:max-w-sm">
        <form onSubmit={handleAssign}>
          <DialogHeader>
            <DialogTitle className="py-3 text-center">
              Assign Service Worker
            </DialogTitle>
          </DialogHeader>

          <FieldGroup className="py-4">
            <Field>
              <Label>Complain</Label>

              <Select
                value={complainId}
                onValueChange={(value) => setComplainId(value ?? "")}
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Choose Complain" />
                </SelectTrigger>

                <SelectContent>
                  {data?.data?.map((payment: any) => (
                    <SelectItem key={payment.id} value={payment.id}>
                      {payment.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>

            <Field>
              <Label>Service Worker</Label>

              <Select
                value={serviceWorkerId}
                onValueChange={(value) => setServiceWorkerId(value ?? "")}
              >
                <SelectTrigger className="w-full cursor-pointer">
                  <SelectValue placeholder="Choose Service Worker" />
                </SelectTrigger>

                <SelectContent>
                  {serviceWorkers?.map((worker: any) => (
                    <SelectItem key={worker.id} value={worker.id}>
                      {worker.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose
              render={
                <Button
                  type="button"
                  variant="outline"
                  className="cursor-pointer"
                >
                  Cancel
                </Button>
              }
            />

            <Button
              type="submit"
              disabled={isPending}
              className="cursor-pointer"
            >
              {isPending ? "Assigning..." : "Assign"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogPage;
