"use client";

import Image from "next/image";
import {
  AdIcon,
  ArrowLeft,
  DollarSign,
  MapPin,
  TicketsPlaneIcon,
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { useSingleComplain } from "@/hooks/complain.hook";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

const ComplainDetailsPage = () => {
  const params = useParams();
  const router = useRouter();

  const { data, isLoading } = useSingleComplain(params.id as string);

  if (isLoading) {
    return (
      <div className="mx-auto w-full max-w-3xl p-6">
        <Skeleton className="mb-5 h-10 w-24" />

        <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
          <Skeleton className="h-72 w-full" />

          <div className="space-y-4 p-6">
            <Skeleton className="h-8 w-2/3" />
            <Skeleton className="h-20 w-full" />
            <Skeleton className="h-5 w-1/2" />
            <Skeleton className="h-5 w-1/4" />
          </div>
        </div>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-6">
        <p>Complain not found.</p>
      </div>
    );
  }

  const complain = data?.data;

  return (
    <div className="mx-auto w-full max-w-3xl p-6">
      {/* Back */}
      <Button
        variant="outline"
        className="mb-5 cursor-pointer"
        onClick={() => router.back()}
      >
        <ArrowLeft className="mr-2 size-4 " />
        Back
      </Button>

      {/* Card */}
      <div className="overflow-hidden rounded-2xl border bg-card shadow-sm">
        {/* Image */}
        <div className="relative h-72 w-full">
          {complain?.imageUrl ? (
            <Image
              src={complain.imageUrl}
              alt={complain.title}
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-muted">
              No Image
            </div>
          )}
        </div>

        {/* Details */}
        <div className="space-y-5 p-6">
          {/* Location & Price */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                <TicketsPlaneIcon className="size-4" />
                Title
              </div>
              <p className="font-medium">{complain?.title}</p>
            </div>

            <div className="rounded-xl border bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                <AdIcon className="size-4" />
                Description
              </div>

              <p className="font-medium">{complain?.description}</p>
            </div>
            <div className="rounded-xl border bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                <DollarSign className="size-4" />
                Price
              </div>

              <p className="font-medium">${complain?.price}</p>
            </div>
            <div className="rounded-xl border bg-muted/30 p-4">
              <div className="mb-2 flex items-center gap-1 text-sm text-muted-foreground">
                <MapPin className="size-4" />
                Location
              </div>

              <p className="font-medium">{complain?.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComplainDetailsPage;
