"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  Droplets,
  FileText,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Trash2,
  TrendingUp,
  UserRoundCheck,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Construction, Waves } from "lucide-react";

const services = [
  {
    icon: Lightbulb,
    label: "Street Light",
    position: "left-[3%] top-[18%]",
    delay: 0,
  },
  {
    icon: Droplets,
    label: "Water Supply",
    position: "right-[3%] top-[25%]",
    delay: 0.3,
  },
  {
    icon: Trash2,
    label: "Waste Management",
    position: "left-[8%] bottom-[16%]",
    delay: 0.6,
  },
];

const HomePage = () => {
  return (
    <main className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-background text-foreground transition-colors duration-500">
      {/* Hero Section */}
      <section>
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-[-10%] top-[-20%] h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[450px] w-[450px] rounded-full bg-primary/5 blur-3xl" />

          <motion.div
            animate={{ x: [0, 15, 0], y: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-[10%] top-[20%] h-2.5 w-2.5 rounded-full bg-primary/60"
          />

          <motion.div
            animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute right-[15%] top-[18%] h-2 w-2 rounded-full bg-primary/50"
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] right-[10%] h-2.5 w-2.5 rounded-full bg-primary/60"
          />
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-10 px-6 py-10 lg:grid-cols-2 lg:px-10">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-2xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
              Smart City Complain Platform
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Make Your <span className="text-primary">City Better.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-6 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg"
            >
              Report city problems, track their progress, and connect with the
              people working to make your community better.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-1 hover:opacity-90"
              >
                Report a Problem
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3.5 font-semibold text-card-foreground shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-accent-foreground"
              >
                Explore Services
              </Link>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Easy Reporting
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Real-time Tracking
              </div>

              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Transparent Service
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative mx-auto flex h-[470px] w-full max-w-[560px] items-center justify-center"
          >
            {/* Illustration Glow */}
            <div className="absolute inset-0 rounded-full bg-primary/5 blur-3xl" />

            {/* City Circle */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-[330px] w-[330px] items-end justify-center overflow-hidden rounded-full border border-border bg-card shadow-2xl shadow-primary/10"
            >
              {/* Sky */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />

              {/* Sun */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute right-14 top-12 h-12 w-12 rounded-full bg-primary/20"
              />

              {/* Buildings */}
              <div className="absolute bottom-0 left-6 h-36 w-12 rounded-t-md bg-muted">
                <div className="mt-4 grid grid-cols-2 gap-2 px-2">
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                </div>
              </div>

              <div className="absolute bottom-0 left-20 h-48 w-16 rounded-t-md bg-secondary">
                <div className="mt-5 grid grid-cols-2 gap-2 px-3">
                  <span className="h-3 w-2 rounded-sm bg-primary/50" />
                  <span className="h-3 w-2 rounded-sm bg-primary/50" />
                  <span className="h-3 w-2 rounded-sm bg-primary/50" />
                  <span className="h-3 w-2 rounded-sm bg-primary/50" />
                  <span className="h-3 w-2 rounded-sm bg-primary/50" />
                  <span className="h-3 w-2 rounded-sm bg-primary/50" />
                  <span className="h-3 w-2 rounded-sm bg-primary/50" />
                  <span className="h-3 w-2 rounded-sm bg-primary/50" />
                </div>
              </div>

              <div className="absolute bottom-0 right-16 h-40 w-14 rounded-t-md bg-muted">
                <div className="mt-5 grid grid-cols-2 gap-2 px-2">
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                  <span className="h-3 w-2 rounded-sm bg-primary/40" />
                </div>
              </div>

              <div className="absolute bottom-0 right-5 h-28 w-10 rounded-t-md bg-secondary" />

              {/* Road */}
              <div className="absolute bottom-0 h-12 w-full bg-muted" />
              <div className="absolute bottom-5 left-0 h-1 w-full bg-background/80" />

              {/* Location */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-[35%] -translate-x-1/2"
              >
                <div className="relative">
                  <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 animate-ping rounded-full bg-primary/20" />
                  <MapPin className="relative h-12 w-12 fill-primary text-primary drop-shadow-lg" />
                </div>
              </motion.div>
            </motion.div>

            {/* Floating Service Cards */}
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.label}
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + service.delay, duration: 0.5 }}
                  className={`absolute ${service.position} hidden items-center gap-3 rounded-xl border border-border bg-card/95 px-4 py-3 shadow-xl backdrop-blur md:flex`}
                >
                  <div className="rounded-lg bg-primary/10 p-2 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>

                  <span className="text-sm font-semibold text-card-foreground">
                    {service.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Complain Status */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute bottom-[5%] right-[2%] w-52 rounded-xl border border-border bg-card/95 p-4 shadow-2xl backdrop-blur"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2 text-primary">
                  <CircleAlert className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-muted-foreground">
                    Complain Status
                  </p>
                  <p className="text-sm font-semibold text-card-foreground">
                    In Progress
                  </p>
                </div>
              </div>

              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "65%" }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="h-full rounded-full bg-primary"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* our service */}
      <section id="services" className="px-4  sm:px-6  lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <MapPin className="size-4" />
              Making Our City Better
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Our <span className="text-primary">Services</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              CityCare connects citizens with essential city services. Report
              local problems and help create a cleaner, safer, and better
              community for everyone.
            </p>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {/* Road Damage */}
            <div className="group flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-orange-500/10 transition-transform duration-300 group-hover:scale-110">
                <Construction className="size-7 text-orange-500" />
              </div>

              <h3 className="text-xl font-semibold">Road Damage</h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                Report damaged roads, potholes, and unsafe streets to help
                improve road safety in your community.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Report Issue <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Street Lights */}
            <div className="group flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-amber-500/10 transition-transform duration-300 group-hover:scale-110">
                <Lightbulb className="size-7 text-amber-500" />
              </div>

              <h3 className="text-xl font-semibold">Street Lights</h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                Report broken street lights and dark public areas to support
                safer streets after sunset.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Report Issue <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Water Supply */}
            <div className="group flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-sky-500/10 transition-transform duration-300 group-hover:scale-110">
                <Droplets className="size-7 text-sky-500" />
              </div>

              <h3 className="text-xl font-semibold">Water Supply</h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                Report water shortages, supply interruptions, and other
                water-related problems in your neighborhood.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Report Issue <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Waste Management */}
            <div className="group flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-emerald-500/10 transition-transform duration-300 group-hover:scale-110">
                <Trash2 className="size-7 text-emerald-500" />
              </div>

              <h3 className="text-xl font-semibold">Waste Management</h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                Report overflowing bins, uncollected garbage, and improper waste
                disposal to keep the city clean.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Report Issue <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Drainage Problems */}
            <div className="group flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-violet-500/10 transition-transform duration-300 group-hover:scale-110">
                <Waves className="size-7 text-violet-500" />
              </div>

              <h3 className="text-xl font-semibold">Drainage Problems</h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                Report blocked drains and waterlogging to help maintain cleaner
                streets and better drainage.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Report Issue <ArrowRight className="size-4" />
              </Link>
            </div>

            {/* Electricity Problems */}
            <div className="group flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg sm:p-7">
              <div className="mb-5 flex size-14 items-center justify-center rounded-2xl bg-rose-500/10 transition-transform duration-300 group-hover:scale-110">
                <Lightbulb className="size-7 text-rose-500" />
              </div>

              <h3 className="text-xl font-semibold">Electricity Issues</h3>

              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                Report electricity line problems and visible electrical hazards
                to help protect your community.
              </p>

              <Link
                href="/"
                className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-all hover:gap-3"
              >
                Report Issue <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border bg-muted/30 p-6 text-center sm:flex-row sm:text-left md:p-8">
            <div>
              <h3 className="text-lg font-semibold sm:text-xl">
                Together, We Can Build a Better City
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                See a problem in your area? Let CityCare know about it.
              </p>
            </div>

            <Link
              href="/"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Report a Complain
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* how it is work */}
      <section
        id="how-it-works"
        className="relative overflow-hidden px-4 py-16 sm:px-6 md:py-24 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <ShieldCheck className="size-4" />
              Simple. Transparent. Effective.
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              How It <span className="text-primary">Works</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Making your city better starts with you. Follow three simple steps
              to report a problem, track its progress, and help create a cleaner
              and safer community.
            </p>
          </div>

          {/* Steps */}
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {/* Connecting Line - Desktop */}
            <div className="absolute left-[22%] right-[22%] top-12 hidden border-t-2 border-dashed border-primary/20 md:block" />

            {/* Step 1 */}
            <div className="group relative rounded-2xl border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8">
              <div className="relative mx-auto mb-7 flex size-24 items-center justify-center rounded-3xl bg-sky-500/10 transition-transform duration-300 group-hover:scale-105">
                <FileText className="size-11 text-sky-500" />

                <span className="absolute -right-2 -top-2 flex size-9 items-center justify-center rounded-full border-4 border-card bg-primary text-sm font-bold text-primary-foreground">
                  01
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight">
                Report a Problem
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Notice a problem in your area? Submit a with its details,
                location, and a photo to help authorities understand the issue.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1.5 text-xs font-medium text-sky-600 dark:text-sky-400">
                <MapPin className="size-3.5" />
                Submit Your Complain
              </div>
            </div>

            {/* Step 2 */}
            <div className="group relative rounded-2xl border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8">
              <div className="relative mx-auto mb-7 flex size-24 items-center justify-center rounded-3xl bg-violet-500/10 transition-transform duration-300 group-hover:scale-105">
                <ClipboardCheck className="size-11 text-violet-500" />

                <span className="absolute -right-2 -top-2 flex size-9 items-center justify-center rounded-full border-4 border-card bg-primary text-sm font-bold text-primary-foreground">
                  02
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight">
                Review & Track
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                Your complain is reviewed by the responsible team. Follow its
                status and stay informed as the issue moves through the
                resolution process.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-600 dark:text-violet-400">
                <Clock3 className="size-3.5" />
                Track Your Progress
              </div>
            </div>

            {/* Step 3 */}
            <div className="group relative rounded-2xl border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl sm:p-8">
              <div className="relative mx-auto mb-7 flex size-24 items-center justify-center rounded-3xl bg-emerald-500/10 transition-transform duration-300 group-hover:scale-105">
                <CheckCircle2 className="size-11 text-emerald-500" />

                <span className="absolute -right-2 -top-2 flex size-9 items-center justify-center rounded-full border-4 border-card bg-primary text-sm font-bold text-primary-foreground">
                  03
                </span>
              </div>

              <h3 className="text-xl font-bold tracking-tight">
                Get It Resolved
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                The assigned service worker handles the issue. Once the work is
                completed, you can review the outcome and help improve local
                public services.
              </p>

              <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="size-3.5" />
                Better City, Better Life
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="relative mt-12 overflow-hidden rounded-3xl border bg-muted/30 px-6 py-8 sm:px-10 sm:py-10">
            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                  Your City. Your Voice.{" "}
                  <span className="text-primary">Your Impact.</span>
                </h3>

                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                  Every reported problem is a step toward a better community.
                  Start making a difference today with CityCare.
                </p>
              </div>

              <Link
                href="/"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:opacity-90"
              >
                Report a Complain
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*  */}
      <section
        id="statistics"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
          {/* Section Heading */}
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <TrendingUp className="size-4" />
              Our Impact
            </div>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              CityCare by the <span className="text-primary">Numbers</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Every report brings us one step closer to a better city. Discover
              how CityCare helps connect citizens, service workers, and
              communities to improve public services.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {/* Total Complains */}
            <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40 hover:shadow-lg sm:p-7">
              <div className="flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl bg-sky-500/10">
                  <ClipboardList className="size-6 text-sky-500" />
                </div>

                <span className="rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-medium text-sky-600 dark:text-sky-400">
                  All Reports
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Total Complains
                </p>

                <h3 className="mt-2 text-4xl font-bold tracking-tight">
                  1,250<span className="text-primary">+</span>
                </h3>

                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  Reported city issues
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 size-28 rounded-full bg-sky-500/5 transition-transform duration-500 group-hover:scale-150" />
            </div>

            {/* Resolved Complains */}
            <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg sm:p-7">
              <div className="flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-500/10">
                  <CheckCircle2 className="size-6 text-emerald-500" />
                </div>

                <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  Completed
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Resolved Complains
                </p>

                <h3 className="mt-2 text-4xl font-bold tracking-tight">
                  980<span className="text-primary">+</span>
                </h3>

                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  Issues successfully resolved
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 size-28 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-150" />
            </div>

            {/* Service Workers */}
            <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg sm:p-7">
              <div className="flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl bg-violet-500/10">
                  <UserRoundCheck className="size-6 text-violet-500" />
                </div>

                <span className="rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-600 dark:text-violet-400">
                  Our Team
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Service Workers
                </p>

                <h3 className="mt-2 text-4xl font-bold tracking-tight">
                  85<span className="text-primary">+</span>
                </h3>

                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  Supporting city services
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 size-28 rounded-full bg-violet-500/5 transition-transform duration-500 group-hover:scale-150" />
            </div>

            {/* Registered Citizens */}
            <div className="group relative overflow-hidden rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/40 hover:shadow-lg sm:p-7">
              <div className="flex items-start justify-between">
                <div className="flex size-12 items-center justify-center rounded-xl bg-amber-500/10">
                  <Users className="size-6 text-amber-500" />
                </div>

                <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-xs font-medium text-amber-600 dark:text-amber-400">
                  Community
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm font-medium text-muted-foreground">
                  Registered Citizens
                </p>

                <h3 className="mt-2 text-4xl font-bold tracking-tight">
                  2,400<span className="text-primary">+</span>
                </h3>

                <p className="mt-3 text-xs leading-5 text-muted-foreground">
                  Helping build a better city
                </p>
              </div>

              <div className="absolute -bottom-8 -right-8 size-28 rounded-full bg-amber-500/5 transition-transform duration-500 group-hover:scale-150" />
            </div>
          </div>

          {/* Bottom Message */}
          <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-2xl border bg-muted/30 px-5 py-6 text-center sm:flex-row sm:text-left">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <ShieldCheck className="size-5 text-primary" />
            </div>

            <div>
              <h3 className="font-semibold">
                Every Citizen Can Make a Difference
              </h3>

              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Together, we can build safer streets, cleaner neighborhoods, and
                more responsive public services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
