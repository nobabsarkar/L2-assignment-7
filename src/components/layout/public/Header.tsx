"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks/auth.hook";
import { useQueryClient } from "@tanstack/react-query";
import Link from "next/link";

const Header = () => {
  const routes = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
  ];

  const { data, isLoading } = useGetMe();

  const { mutate: logout } = useLogout();
  const queryClient = useQueryClient();

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "Logout Successfully",
          description: "You have been logged out",
          type: "success",
        });
        queryClient.removeQueries({ queryKey: ["user"] });
      },
      onError: () => {
        toast.add({
          title: "Logout Failed",
          description: "Something went wrong, Please try again",
          type: "error",
        });
      },
    });
  };

  return (
    <header className="w-full h-16 border border-b">
      <div className="flex justify-between items-center h-full max-w-7xl mx-auto">
        <div className="p-6 md:p-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-lg font-semibold tracking-tight"
          >
            <Logo />

            <span>Complain & Service</span>
          </Link>
        </div>
        <nav className="flex gap-5">
          {routes.map((route) => (
            <Link key={route.url} href={route.url}>
              {route.name}
            </Link>
          ))}
        </nav>
        <div>
          {!isLoading && !data && (
            <Button
              variant="outline"
              render={<Link href="/login">Login</Link>}
              nativeButton={false}
            >
              Login
            </Button>
          )}

          {!isLoading && data && (
            <Button
              onClick={handleLogout}
              className="cursor-pointer"
              variant="destructive"
            >
              Logout
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
