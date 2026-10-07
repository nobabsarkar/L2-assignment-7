import Logo from "@/assets/svg/logo";
import RegisterForm from "@/components/form/register-form";

import Link from "next/link";

const RegisterPage = () => {
  return (
    <div className="grid min-h-screen">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <Logo />
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight">CityCare</span>

              <span className="hidden text-[10px] leading-none text-muted-foreground sm:block">
                Smart City Services
              </span>
            </div>
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
