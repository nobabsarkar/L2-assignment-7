/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Droplets,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Trash2,
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Lightbulb,
    label: "Street Lights",
    position: "left-0 top-[17%]",
    delay: 0.6,
  },
  {
    icon: Droplets,
    label: "Water Supply",
    position: "right-0 top-[25%]",
    delay: 0.8,
  },
  {
    icon: Trash2,
    label: "Waste Management",
    position: "left-[3%] bottom-[14%]",
    delay: 1,
  },
];

const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  const floatingAnimation = shouldReduceMotion
    ? {}
    : {
        y: [0, -9, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <section
      id="how-it-works"
      className="relative isolate overflow-hidden bg-background"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-40 -right-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
      </div>

      {/* Main Hero: approximately 65% of viewport height */}
      <div className="relative mx-auto grid min-h-[65svh] max-w-7xl items-center gap-8 px-5 py-12 sm:px-8 lg:min-h-[65svh] lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-8">
        {/* Left Content */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="relative z-10 mx-auto w-full max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          {/* Eyebrow */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold tracking-wide text-primary sm:text-sm">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            SMART CITY · BETTER LIVING
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
            A Better City
            <br />
            Starts With{" "}
            <span className="bg-gradient-to-r from-primary via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              You.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8 lg:mx-0">
            Report local issues, track complain progress, and connect with the
            people working to make your community cleaner, safer, and better for
            everyone.
          </p>

          {/* CTA Buttons */}
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/login"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Report a Complain
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              href="/services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-card/80 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              Explore Services
            </Link>
          </div>

          {/* Trust points */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-sm text-muted-foreground lg:justify-start">
            <span className="inline-flex items-center gap-2">
              <CheckCircle2 className="size-4 shrink-0 text-primary" />
              Easy Reporting
            </span>

            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="size-4 shrink-0 text-primary" />
              Transparent Process
            </span>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto flex w-full max-w-[540px] items-center justify-center py-5 lg:py-0"
        >
          {/* City illustration */}
          <motion.div
            animate={floatingAnimation}
            className="relative aspect-square w-[min(78vw,390px)] overflow-hidden rounded-full border border-primary/15 bg-gradient-to-b from-primary/10 via-card to-primary/5 shadow-2xl shadow-primary/10 sm:w-[390px] lg:w-[min(34vw,410px)]"
          >
            {/* Sun */}
            <div className="absolute right-[18%] top-[15%] size-12 rounded-full bg-amber-400/20 sm:size-16" />
            <div className="absolute right-[21%] top-[18%] size-6 rounded-full bg-amber-400/40 sm:size-8" />

            {/* Clouds */}
            <div className="absolute left-[17%] top-[23%] h-2 w-12 rounded-full bg-primary/10" />
            <div className="absolute left-[20%] top-[20%] h-2 w-8 rounded-full bg-primary/10" />

            {/* Back buildings */}
            <div className="absolute bottom-[27%] left-[9%] h-[34%] w-[15%] rounded-t-lg border border-primary/10 bg-muted">
              <div className="grid grid-cols-2 gap-2 p-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="h-2.5 rounded-sm bg-primary/25" />
                ))}
              </div>
            </div>

            <div className="absolute bottom-[27%] left-[27%] h-[49%] w-[19%] rounded-t-lg border border-primary/10 bg-primary/15">
              <div className="grid grid-cols-2 gap-2 p-2.5 pt-4">
                {Array.from({ length: 12 }).map((_, i) => (
                  <span key={i} className="h-3 rounded-sm bg-primary/35" />
                ))}
              </div>
            </div>

            <div className="absolute bottom-[27%] right-[25%] h-[39%] w-[19%] rounded-t-lg border border-primary/10 bg-muted">
              <div className="grid grid-cols-2 gap-2 p-2.5 pt-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span key={i} className="h-3 rounded-sm bg-primary/25" />
                ))}
              </div>
            </div>

            <div className="absolute bottom-[27%] right-[8%] h-[29%] w-[14%] rounded-t-lg border border-primary/10 bg-primary/10">
              <div className="grid grid-cols-2 gap-1.5 p-2">
                {Array.from({ length: 6 }).map((_, i) => (
                  <span key={i} className="h-2.5 rounded-sm bg-primary/30" />
                ))}
              </div>
            </div>

            {/* Green spaces */}
            <div className="absolute bottom-[26%] left-[3%] h-8 w-8 rounded-full bg-emerald-500/20" />
            <div className="absolute bottom-[28%] right-[4%] h-10 w-10 rounded-full bg-emerald-500/20" />

            {/* Road */}
            <div className="absolute bottom-[13%] left-[-5%] h-[16%] w-[110%] rotate-[-8deg] border-y border-border/70 bg-muted/90" />
            <div className="absolute bottom-[20%] left-[8%] h-0.5 w-[84%] rotate-[-8deg] border-t-2 border-dashed border-primary/35" />

            {/* Location marker */}
            <motion.div
              animate={shouldReduceMotion ? {} : { y: [0, -6, 0] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-[34%] z-10 -translate-x-1/2"
            >
              <div className="relative flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-background shadow-xl sm:size-[76px]">
                <div className="absolute inset-2 rounded-xl bg-primary/10" />
                <MapPin className="relative size-9 fill-primary/15 text-primary sm:size-10" />
              </div>
              <div className="mx-auto h-3 w-8 rounded-full bg-primary/20 blur-sm" />
            </motion.div>

            {/* Bottom caption */}
            <div className="absolute bottom-[5%] left-0 right-0 text-center">
              <span className="rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur">
                Building better communities
              </span>
            </div>
          </motion.div>

          {/* Floating service cards */}
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.label}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, scale: 0.85, y: 10 }
                }
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: service.delay,
                  duration: 0.45,
                }}
                className={`absolute ${service.position} z-20 hidden items-center gap-2.5 rounded-xl border border-border/80 bg-card/95 px-3 py-3 shadow-lg backdrop-blur-md sm:flex`}
              >
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4.5" />
                </span>
                <span className="text-xs font-semibold text-foreground sm:text-sm">
                  {service.label}
                </span>
              </motion.div>
            );
          })}

          {/* Complain tracking card */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-[2%] right-0 z-20 w-48 rounded-2xl border border-border/80 bg-card/95 p-3.5 shadow-xl backdrop-blur-md sm:bottom-[4%] sm:right-[-1%] sm:w-52 sm:p-4"
          >
            <div className="flex items-center gap-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                <CircleAlert className="size-5" />
              </span>

              <div className="min-w-0">
                <p className="text-[11px] text-muted-foreground">
                  Complain tracking
                </p>
                <p className="mt-0.5 text-sm font-semibold text-foreground">
                  Status updates
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Progress visible
              </span>
              <CheckCircle2 className="size-4 text-emerald-500" />
            </div>

            <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "72%" }}
                transition={{ delay: 1.2, duration: 1 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Visual flow to the next section */}
      <div className="flex justify-center pb-5">
        <Link
          href="#how-it-works"
          className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-muted-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          Discover how it works
          <motion.span
            animate={shouldReduceMotion ? {} : { y: [0, 4, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <ArrowDown className="size-4" />
          </motion.span>
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
