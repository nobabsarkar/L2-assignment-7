"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks/auth.hook";
import { UserRole } from "@/types/user.type";
import { useQueryClient } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Moon,
  Sun,
  UserRound,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const dashboardRoute: Record<UserRole, string> = {
  SUPER_ADMIN: "/admin",
  ADMIN: "/admin",
  CITIZEN: "/citizen",
  SERVICE_WORKER: "/service-worker",
};

const publicLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mounted, setMounted] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const queryClient = useQueryClient();
  const { theme, setTheme } = useTheme();

  const { data, isLoading } = useGetMe();
  const { mutate: logout, isPending: isLoggingOut } = useLogout();

  const user = data?.data;
  const role = user?.role as UserRole | undefined;

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setProfileOpen(false);
  }, []);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        queryClient.setQueryData(["user"], null);
        queryClient.invalidateQueries();

        toast.add({
          title: "Logout Successfully",
          description: "You have been logged out",
          type: "success",
        });

        setProfileOpen(false);
        setMobileOpen(false);
        router.push("/login");
      },
      onError: () => {
        toast.add({
          title: "Logout Failed",
          description: "Something went wrong. Please try again.",
          type: "error",
        });
      },
    });
  };

  const handleThemeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const dashboardHref = role ? dashboardRoute[role] : "/login";

  const authenticatedLinks = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Dashboard", href: dashboardHref },
  ];

  const navLinks = user ? authenticatedLinks : publicLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex shrink-0 items-center gap-2"
          aria-label="CityCare Home"
        >
          <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15">
            <Logo />
          </div>

          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tight">CityCare</span>
            <span className="hidden text-[10px] leading-none text-muted-foreground sm:block">
              Smart City Services
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                isActive(link.href)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex shrink-0 items-center gap-1 sm:gap-2">
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

          {/* Logged Out */}
          {!isLoading && !user && (
            <div className="hidden items-center gap-2 sm:flex">
              <Button
                variant="outline"
                render={<Link href="/login" />}
                nativeButton={false}
                className="cursor-pointer"
              >
                Login
              </Button>

              <Button
                variant="outline"
                render={<Link href="/register" />}
                nativeButton={false}
                className="flex-1 cursor-pointer"
                onClick={() => setMobileOpen(false)}
              >
                Register
              </Button>
              {/* <Button
                render={<Link href="/register" />}
                nativeButton={false}
                className="cursor-pointer"
              >
                Register
              </Button> */}
            </div>
          )}

          {/* Logged In: Profile Dropdown */}
          {!isLoading && user && (
            <div className="relative hidden sm:block">
              <Button
                type="button"
                variant="outline"
                onClick={() => setProfileOpen((open) => !open)}
                aria-expanded={profileOpen}
                className="flex cursor-pointer items-center gap-2"
              >
                <UserRound className="size-4" />
                <span className="max-w-28 truncate text-sm">
                  {user.name || user.email || "My Account"}
                </span>
                <ChevronDown
                  className={`size-4 transition-transform ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>

              {profileOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-56 rounded-xl border bg-popover p-2 text-popover-foreground shadow-lg">
                  <div className="border-b px-3 py-2">
                    <p className="truncate text-sm font-semibold">
                      {user.name || "Welcome"}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {user.email}
                    </p>
                    {role && (
                      <p className="mt-1 text-xs font-medium text-primary">
                        {role.replaceAll("_", " ")}
                      </p>
                    )}
                  </div>

                  <Link
                    href={dashboardHref}
                    className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
                    onClick={() => setProfileOpen(false)}
                  >
                    <LayoutDashboard className="size-4" />
                    Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-muted"
                    onClick={() => setProfileOpen(false)}
                  >
                    <UserRound className="size-4" />
                    My Profile
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
                  >
                    <LogOut className="size-4" />
                    {isLoggingOut ? "Logging out..." : "Logout"}
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Mobile Menu Toggle */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="cursor-pointer lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
          </Button>
        </div>
      </div>

      {/* Responsive Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3 sm:px-6"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {!isLoading && !user && (
              <div className="mt-2 flex gap-2 border-t pt-3">
                <Button
                  variant="outline"
                  render={<Link href="/login" />}
                  nativeButton={false}
                  className="flex-1 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  <LogIn className="mr-2 size-4" />
                  Login
                </Button>
                <Button
                  variant="outline"
                  render={<Link href="/register" />}
                  nativeButton={false}
                  className="flex-1 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  <LogIn className="mr-2 size-4" />
                  Register
                </Button>

                {/* <Button
                  render={<Link href="/register" />}
                  nativeButton={false}
                  className="flex-1 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Button> */}
              </div>
            )}

            {!isLoading && user && (
              <div className="mt-2 space-y-1 border-t pt-3">
                <div className="px-3 py-2">
                  <p className="text-sm font-semibold">
                    {user.name || "My Account"}
                  </p>
                  <p className="truncate text-xs text-muted-foreground">
                    {user.email}
                  </p>
                </div>

                <Link
                  href="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm hover:bg-muted"
                >
                  <UserRound className="size-4" />
                  My Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-destructive hover:bg-destructive/10 disabled:opacity-50"
                >
                  <LogOut className="size-4" />
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </button>
              </div>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
