"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks/auth.hook";
import { useQueryClient } from "@tanstack/react-query";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Header = () => {
  const [mounted, setMounted] = useState(false);

  const { data, isLoading } = useGetMe();
  const { mutate: logout } = useLogout();
  const queryClient = useQueryClient();

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        toast.add({
          title: "Logout Successfully",
          description: "You have been logged out",
          type: "success",
        });

        queryClient.removeQueries({
          queryKey: ["user"],
        });
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

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15">
            <Logo />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">CityCare</span>

            <span className="hidden text-[10px] leading-none text-muted-foreground sm:block">
              Smart City Services
            </span>
          </div>
        </Link>

        {/* Right Side */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          {mounted ? (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={handleThemeToggle}
              className="cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>
          ) : (
            <div className="size-9" />
          )}

          {/* Login / Logout */}
          {!isLoading && !data && (
            <Button
              variant="outline"
              render={<Link href="/login">Login</Link>}
              nativeButton={false}
              className="cursor-pointer"
            >
              Login
            </Button>
          )}

          {!isLoading && data && (
            <Button
              onClick={handleLogout}
              variant="destructive"
              className="cursor-pointer"
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
