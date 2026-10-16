"use client";

import Link from "next/link";
import Logo from "@/assets/svg/logo";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/#home" },
  { label: "Key Features", href: "/#features" },
  { label: "Our Services", href: "/#services" },
  { label: "How It Works", href: "/#how-it-works" },
];

const serviceLinks = [
  { label: "Road Damage", href: "/#services" },
  { label: "Street Lighting", href: "/#services" },
  { label: "Water & Drainage", href: "/#services" },
  { label: "Waste Management", href: "/#services" },
  { label: " Tracking", href: "/#how-it-works" },
];

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-border bg-card">
      {/* Decorative accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main footer */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:gap-12 lg:grid-cols-[1.5fr_0.8fr_1fr_1.1fr] lg:gap-10 lg:py-16">
          {/* Brand */}
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label="CityCare home"
              className="group inline-flex items-center gap-2.5"
            >
              <div className="transition-transform duration-300 group-hover:scale-105">
                <Logo />
              </div>

              <span className="text-2xl font-bold tracking-tight text-foreground">
                City<span className="text-primary">Care</span>
              </span>
            </Link>

            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Making city services more accessible through transparent complain
              reporting, accountable service management, and citizen-focused
              solutions.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-2 text-xs font-medium text-muted-foreground">
              <ShieldCheck className="size-4 text-primary" />
              Built for better communities
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Explore</h3>

            <ul className="mt-5 space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-3.5 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Civic Services
            </h3>

            <ul className="mt-5 space-y-3.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              Get in Touch
            </h3>

            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Questions or feedback? Reach out to our team.
            </p>

            <div className="mt-5 space-y-4">
              <a
                href="mailto:support@citycare.com"
                className="group flex items-start gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="mt-0.5 size-4 shrink-0 text-primary" />
                <span className="break-all">support@citycare.com</span>
              </a>

              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>Serving citizens, building better communities.</span>
              </div>
            </div>

            <Link
              href="/citizen"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:opacity-80"
            >
              Report an Issue
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-border py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-xs leading-5 text-muted-foreground sm:text-left sm:text-sm">
            © {new Date().getFullYear()} CityCare. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm">
            <Link href="/" className="transition-colors hover:text-primary">
              Privacy
            </Link>
            <Link href="/" className="transition-colors hover:text-primary">
              Terms
            </Link>
            <span className="text-border" aria-hidden="true">
              |
            </span>
            <span>Made with care for better cities.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
