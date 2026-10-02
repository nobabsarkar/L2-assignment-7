import LoginForm from "@/components/form/login-form";
import Link from "next/link";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-muted/30 flex flex-col">
      {/* Header */}
      <div className="p-6 md:p-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
        >
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
            C
          </div>

          <span>Complain & Service</span>
        </Link>
      </div>

      {/* Login Section */}
      <div className="flex flex-1 items-center justify-center px-4 pb-12">
        <div className="w-full max-w-md">
          <div className="rounded-2xl border bg-background p-6 shadow-xl shadow-black/5 sm:p-8">
            <LoginForm />

            {/* Register */}
            <div className="mt-6 text-center text-sm text-muted-foreground">
              Don't have an account?{" "}
              <Link
                href="/register"
                className="font-medium text-primary hover:underline"
              >
                Create an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
