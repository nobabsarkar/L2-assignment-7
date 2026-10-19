"use client";

import { useCitizenSeeHerComplain } from "@/hooks/assign.hook";
import {
  CalendarDays,
  MapPin,
  UserRound,
  FileText,
  CheckCircle2,
  Image as ImageIcon,
  Clock,
  Mail,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import Image from "next/image";

const ProofComplainData = () => {
  const { data, isPending, isError } = useCitizenSeeHerComplain();

  const assignments = data?.data ?? [];

  if (isPending) {
    return (
      <div className="flex min-h-60 items-center justify-center">
        <p className="animate-pulse text-sm text-muted-foreground">
          Loading complain information...
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-xl border p-8 text-center">
        <h2 className="font-semibold text-destructive">
          Failed to load complain information
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Please try again later.
        </p>
      </div>
    );
  }

  if (assignments.length === 0) {
    return (
      <div className="rounded-xl border p-8 text-center">
        <FileText className="mx-auto mb-3 size-10 text-muted-foreground" />
        <h2 className="font-semibold">No Complain Information</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          No complain work status is available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 p-4 md:p-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">
          Complain Work Status
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          View complain details, assigned workers, and work proof.
        </p>
      </div>

      {assignments.map((item: any) => {
        const complain = item.complain;
        const worker = item.serviceWorker;

        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-2xl border bg-card shadow-sm"
          >
            {/* Complain Header */}
            <div className="flex flex-col gap-3 border-b bg-muted/30 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Complain Title</p>
                <h2 className="mt-1 text-xl font-bold">
                  {complain?.title ?? "Untitled Complain"}
                </h2>
              </div>

              <Badge
                variant={
                  item.status === "COMPLETED"
                    ? "default"
                    : item.status === "IN_PROGRESS"
                      ? "outline"
                      : "secondary"
                }
                className="w-fit"
              >
                {item.status?.replaceAll("_", " ") ?? "UNKNOWN"}
              </Badge>
            </div>

            <div className="grid gap-6 p-5 lg:grid-cols-2">
              {/* Complain Details */}
              <section className="space-y-4">
                <h3 className="flex items-center gap-2 font-semibold">
                  <FileText className="size-5 text-primary" />
                  Complain Information
                </h3>

                <div className="rounded-xl border p-4">
                  <p className="text-sm text-muted-foreground">Description</p>
                  <p className="mt-1 text-sm leading-6">
                    {complain?.description ?? "No description available"}
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-xl border p-4">
                  <MapPin className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="mt-1 font-medium">
                      {complain?.location ?? "Not specified"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border p-4">
                  <CalendarDays className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Submitted Date
                    </p>
                    <p className="mt-1 font-medium">
                      {item.createdAt
                        ? new Date(item.createdAt).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })
                        : "N/A"}
                    </p>
                  </div>
                </div>

                {complain?.imageUrl && (
                  <div className="space-y-2">
                    <p className="flex items-center gap-2 text-sm font-medium">
                      <ImageIcon className="size-4 text-primary" />
                      Original Complain Image
                    </p>

                    <a
                      href={complain.imageUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={complain.imageUrl}
                        height={400}
                        width={400}
                        alt="Original complain"
                        className="h-56 w-full rounded-xl border object-cover transition-opacity hover:opacity-90"
                      />
                    </a>
                  </div>
                )}
              </section>

              {/* Service Worker Information */}
              <section className="space-y-4">
                <h3 className="flex items-center gap-2 font-semibold">
                  <UserRound className="size-5 text-primary" />
                  Assigned Service Worker
                </h3>

                <div className="rounded-xl border p-4">
                  <div className="flex items-center gap-4">
                    <div className="flex size-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10">
                      {worker?.imageUrl ? (
                        <Image
                          src={worker.imageUrl}
                          height={400}
                          width={400}
                          alt={worker.name ?? "Service worker"}
                          className="size-full object-cover"
                        />
                      ) : (
                        <UserRound className="size-7 text-primary" />
                      )}
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold">
                        {worker?.name ?? "Not assigned"}
                      </p>
                      <p className="break-all text-sm text-muted-foreground">
                        {worker?.email ?? "Email unavailable"}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 border-t pt-4 text-sm">
                    <Mail className="size-4 text-muted-foreground" />
                    <span className="text-muted-foreground">Role:</span>
                    <span className="font-medium">
                      {worker?.role?.replaceAll("_", " ") ?? "N/A"}
                    </span>
                  </div>
                </div>

                {/* Work Proof */}
                <h3 className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="size-5 text-primary" />
                  Work Completion Proof
                </h3>

                {complain?.proofImageUrl ? (
                  <div className="space-y-3 rounded-xl border p-4">
                    <Badge variant="default">Proof Submitted</Badge>

                    <a
                      href={complain.proofImageUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={complain?.proofImageUrl}
                        height={400}
                        width={400}
                        alt="Work completion proof"
                        className="mt-3 h-56 w-full rounded-xl border object-cover transition-opacity hover:opacity-90"
                      />
                    </a>

                    <div>
                      <p className="text-sm text-muted-foreground">
                        Work Description
                      </p>
                      <p className="mt-1 text-sm leading-6">
                        {complain?.proofDescription ??
                          "No proof description available"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed p-6 text-center">
                    <Clock className="mx-auto mb-2 size-8 text-muted-foreground" />
                    <p className="font-medium">Proof Not Submitted</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Work completion proof has not been submitted yet.
                    </p>
                  </div>
                )}
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProofComplainData;
