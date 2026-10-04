import Logo from "@/assets/svg/logo";
import VerifyAccountForm from "@/components/form/verify-account-form";
import Link from "next/link";
import { Suspense } from "react";

export default function VerifyAccountPage() {
  return (
    <div className="">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="flex items-center gap-2 font-medium">
            <div className="flex items-center gap-2">
              <Logo />
              <span className="text-lg font-bold tracking-tight">CityCare</span>
            </div>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <Suspense fallback={<p>Loading...</p>}>
              <VerifyAccountForm />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}
