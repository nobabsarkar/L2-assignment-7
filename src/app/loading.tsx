import { Loader2, MapPin } from "lucide-react";

const Loading = async () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="flex w-full max-w-sm flex-col items-center text-center">
        {/* Logo / Icon */}
        <div className="mb-6 flex size-20 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-primary/20">
          <MapPin className="size-10 animate-pulse text-primary" />
        </div>

        {/* Brand */}
        <h1 className="text-2xl font-bold tracking-tight">CityCare</h1>

        <p className="mt-2 text-sm text-muted-foreground">
          Making your city better, one report at a time.
        </p>

        {/* Loading */}
        <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin text-primary" />
          <span>Loading CityCare...</span>
        </div>

        {/* Progress line */}
        <div className="mt-5 h-1 w-48 overflow-hidden rounded-full bg-muted">
          <div className="h-full w-1/2 animate-[loading_1.5s_ease-in-out_infinite] rounded-full bg-primary" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
