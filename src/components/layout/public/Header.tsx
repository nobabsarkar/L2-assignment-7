/** biome-ignore-all lint/correctness/useExhaustiveDependencies: <explanation> */
"use client";

import Logo from "@/assets/svg/logo";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/toast";
import { useGetMe, useLogout } from "@/hooks/auth.hook";
import { UserRole } from "@/types/user.type";
import { useQueryClient } from "@tanstack/react-query";
import { useTheme } from "next-themes";
import Image from "next/image";
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
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        queryClient.setQueryData(["user"], null);
        queryClient.invalidateQueries();

        toast.add({
          title: "Logout Successful",
          description: "You have been logged out.",
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
    ...publicLinks,
    { label: "Dashboard", href: dashboardHref },
  ];

  const navLinks = user ? authenticatedLinks : publicLinks;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="group flex min-w-0 shrink-0 items-center gap-2"
          aria-label="CityCare Home"
        >
          <div className="flex size-9 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15 sm:size-10">
            <Logo />
          </div>

          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight sm:text-lg">
              CityCare
            </span>
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
              className="size-9 cursor-pointer sm:size-10"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="size-5" />
              ) : (
                <Moon className="size-5" />
              )}
            </Button>
          ) : (
            <div className="size-9 sm:size-10" />
          )}

          {/* Login and Register */}
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
                variant="default"
                render={<Link href="/register" />}
                nativeButton={false}
                className="cursor-pointer"
              >
                Register
              </Button>
            </div>
          )}

          {/* Profile Button: Desktop, Tablet and Mobile */}
          {!isLoading && user && (
            <div className="relative">
              <Button
                type="button"
                variant="ghost"
                onClick={() => setProfileOpen((open) => !open)}
                aria-expanded={profileOpen}
                aria-label="Open profile menu"
                className="group flex h-11 cursor-pointer items-center gap-1.5 rounded-full border border-border/70 bg-background px-2 shadow-sm transition-all hover:border-primary/40 hover:bg-accent sm:h-12 sm:gap-2 sm:px-2.5"
              >
                <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10 ring-2 ring-background transition-all group-hover:ring-primary/20 sm:size-10">
                  {user.imageUrl ? (
                    <Image
                      key={user.imageUrl}
                      src={user.imageUrl}
                      alt={user.name || "User profile"}
                      width={80}
                      height={80}
                      sizes="(max-width: 640px) 36px, 40px"
                      className="size-full object-cover"
                    />
                  ) : (
                    <UserRound className="size-5 text-primary sm:size-6" />
                  )}
                </span>

                <span className="hidden max-w-28 truncate text-sm font-medium md:block">
                  {user.name || user.email || "My Account"}
                </span>

                <ChevronDown
                  className={`size-4 shrink-0 text-muted-foreground transition-transform duration-200 ${
                    profileOpen ? "rotate-180 text-primary" : ""
                  }`}
                />
              </Button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-full z-[60] mt-2 w-[min(18rem,calc(100vw-1.5rem))] overflow-hidden rounded-xl border bg-popover p-2 text-popover-foreground shadow-xl">
                  <div className="flex items-center gap-3 border-b px-2 py-3">
                    <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-primary/10">
                      {user.imageUrl ? (
                        <Image
                          key={user.imageUrl}
                          src={user.imageUrl}
                          alt={user.name || "User profile"}
                          width={88}
                          height={88}
                          className="size-full object-cover"
                        />
                      ) : (
                        <UserRound className="size-6 text-primary" />
                      )}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold">
                        {user.name || "Welcome"}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </div>

                  <Link
                    href={dashboardHref}
                    onClick={() => setProfileOpen(false)}
                    className="mt-1 flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted"
                  >
                    <LayoutDashboard className="size-4" />
                    Dashboard
                  </Link>

                  <Link
                    href="/profile"
                    onClick={() => setProfileOpen(false)}
                    className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted"
                  >
                    <UserRound className="size-4" />
                    My Profile
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    disabled={isLoggingOut}
                    className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-destructive transition-colors hover:bg-destructive/10 disabled:cursor-not-allowed disabled:opacity-50"
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
            className="size-9 cursor-pointer lg:hidden sm:size-10"
            onClick={() => {
              setMobileOpen((open) => !open);
              setProfileOpen(false);
            }}
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

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t bg-background lg:hidden">
          <nav
            aria-label="Mobile navigation"
            className="mx-auto flex max-w-7xl flex-col gap-1 px-3 py-3 sm:px-6"
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

            {/* Mobile Guest Actions */}
            {!isLoading && !user && (
              <div className="mt-2 flex gap-2 border-t pt-3">
                <Button
                  variant="outline"
                  render={<Link href="/login" />}
                  nativeButton={false}
                  className="flex-1 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  <LogIn className="size-4" />
                  Login
                </Button>

                <Button
                  variant="default"
                  render={<Link href="/register" />}
                  nativeButton={false}
                  className="flex-1 cursor-pointer"
                  onClick={() => setMobileOpen(false)}
                >
                  Register
                </Button>
              </div>
            )}

            {/* Mobile Authenticated User */}
            {!isLoading && user && (
              <div className="mt-2 space-y-1 border-t pt-3">
                <div className="flex items-center gap-3 rounded-lg bg-muted/40 px-3 py-3">
                  <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full border bg-primary/10">
                    {user.imageUrl ? (
                      <Image
                        key={user.imageUrl}
                        src={user.imageUrl}
                        alt={user.name || "User profile"}
                        width={88}
                        height={88}
                        className="size-full object-cover"
                      />
                    ) : (
                      <UserRound className="size-6 text-primary" />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">
                      {user.name || "My Account"}
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
                </div>

                <Link
                  href={dashboardHref}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted"
                >
                  <LayoutDashboard className="size-4" />
                  Dashboard
                </Link>

                <Link
                  href="/profile"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted"
                >
                  <UserRound className="size-4" />
                  My Profile
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex w-full cursor-pointer items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-50"
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
