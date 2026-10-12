"use client";

import Link from "next/link";
import {
  // Facebook,
  // Github,
  // Instagram,
  Mail,
  MapPin,
} from "lucide-react";
import Logo from "@/assets/svg/logo";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-card">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center gap-2">
              <Logo />

              <span className="text-xl font-bold tracking-tight">
                City<span className="text-primary">Care</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-muted-foreground">
              A smarter way to report city problems, track complains, and
              connect citizens with essential public services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold">Quick Links</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link
                  href="/"
                  className="transition-colors underline hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-colors underline hover:text-primary"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-colors underline hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="transition-colors underline hover:text-primary"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold">Our Services</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Road Damage Reporting</li>
              <li>Street Light Complains</li>
              <li>Water Supply Issues</li>
              <li>Waste Management</li>
              <li>Complain Tracking</li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-4 font-semibold">Get in Touch</h3>

            <div className="flex items-start gap-3 text-sm text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
              <p>Building a better, cleaner, and smarter city together.</p>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <Link
                href="mailto:support@citycare.com"
                aria-label="Email CityCare"
                className="flex size-9 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="size-4" />
              </Link>

              <Link
                href="/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaGithub className="size-4" />
              </Link>

              <Link
                href="/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaFacebook />
              </Link>

              <Link
                href="/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-lg border transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
              >
                <FaInstagram className="size-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-5 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <p>© {new Date().getFullYear()} CityCare. All rights reserved.</p>

          <p className="text-xs sm:text-sm">
            Made with care for a better city.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
