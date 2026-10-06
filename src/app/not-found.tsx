import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, MapPin, MapPinOff } from "lucide-react";
import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="w-full max-w-lg text-center">
        {/* Icon */}
        <div className="mx-auto mb-7 flex size-24 items-center justify-center rounded-3xl bg-primary/10 ring-1 ring-primary/20">
          <MapPinOff className="size-12 text-primary" />
        </div>

        {/* Error Code */}
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Error 404
        </p>

        {/* Heading */}
        <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-5xl">
          Page not found
        </h1>

        {/* Description */}
        <p className="mx-auto mt-5 max-w-md text-base leading-7 text-muted-foreground">
          Looks like you&apos;ve reached a place that doesn&apos;t exist in
          CityCare. The page may have been moved, removed, or the address might
          be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="
              inline-flex h-11 items-center justify-center gap-2
              rounded-lg bg-primary px-6
              text-sm font-semibold text-primary-foreground
              shadow-sm
              transition-all duration-200
              hover:bg-primary/90
              hover:shadow-md
            "
          >
            <Home className="size-4" />
            Back to Home
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-10 border-t pt-6">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" />
            <span>CityCare — Make your city better</span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
