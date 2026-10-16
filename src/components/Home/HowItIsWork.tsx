"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Check,
  CheckCircle2,
  ClipboardList,
  Clock3,
  FileText,
  HardHat,
  MapPin,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Report the problem",
    description:
      "Citizens submit a complaint with a clear description, location, and supporting photo.",
    icon: MapPin,
    status: "SUBMITTED",
    statusClass: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
  },
  {
    number: "02",
    title: "Review & approval",
    description:
      "The administration reviews the report and approves valid complaints for action.",
    icon: ShieldCheck,
    status: "APPROVED",
    statusClass: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  },
  {
    number: "03",
    title: "Service worker assigned",
    description:
      "An administrator assigns a service worker to investigate and resolve the issue.",
    icon: HardHat,
    status: "IN PROGRESS",
    statusClass: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  },
  {
    number: "04",
    title: "Resolution & proof",
    description:
      "Citizens can follow progress and view completion evidence when the work is finished.",
    icon: CheckCircle2,
    status: "RESOLVED",
    statusClass: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
];

export default function HowItIsWorks() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="relative overflow-hidden border-y border-border/60 bg-background px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 size-80 rounded-full bg-primary/[0.06] blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mb-12 max-w-3xl sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              The CityCare process
            </span>
          </div>

          <h2
            id="how-it-works-title"
            className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            One report can make
            <br className="hidden sm:block" /> a{" "}
            <span className="text-primary">real difference.</span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
            From the moment a citizen reports a problem to the final resolution,
            CityCare keeps the process organized, transparent, and easy to
            follow.
          </p>
        </motion.div>

        {/* Timeline + visual dashboard */}
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Left: vertical workflow */}
          <div>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === steps.length - 1;

              return (
                <motion.div
                  key={step.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.45,
                    delay: shouldReduceMotion ? 0 : index * 0.1,
                  }}
                  className="relative flex gap-4 sm:gap-5"
                >
                  {/* Timeline line */}
                  <div className="flex w-12 shrink-0 flex-col items-center sm:w-14">
                    <div
                      className={`relative z-10 flex size-11 shrink-0 items-center justify-center rounded-2xl border border-border bg-card text-foreground shadow-sm transition-colors sm:size-12 ${
                        isLast
                          ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                          : "group-hover:border-primary/30"
                      }`}
                    >
                      <Icon className="size-5" strokeWidth={1.8} />
                    </div>

                    {!isLast && (
                      <div className="my-2 min-h-14 w-px flex-1 bg-gradient-to-b from-border via-border to-primary/30 sm:min-h-16" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className={isLast ? "pb-0" : "pb-7 sm:pb-9"}>
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold tracking-widest text-primary">
                        {step.number}
                      </span>
                      <span
                        className={`rounded-md px-2 py-1 text-[10px] font-semibold tracking-wider ${step.statusClass}`}
                      >
                        {step.status}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                      {step.title}
                    </h3>

                    <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Right: complaint journey visualization */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative min-w-0"
          >
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/[0.03] dark:shadow-black/10">
              {/* Dashboard header */}
              <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ClipboardList className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Complaint journey
                    </p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Example workflow preview
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Trackable
                </span>
              </div>

              {/* Example complaint */}
              <div className="p-4 sm:p-6">
                <div className="rounded-xl border border-border bg-muted/30 p-4 sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 gap-3">
                      <div className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                        <FileText className="size-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs font-medium text-muted-foreground">
                          SAMPLE COMPLAINT
                        </p>
                        <h3 className="mt-1 text-sm font-semibold text-foreground sm:text-base">
                          Damaged street light
                        </h3>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-md border border-border bg-background px-2 py-1 font-mono text-[10px] text-muted-foreground">
                      CC-001
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <MapPin className="size-3.5 shrink-0" />
                    <span>Example location · City neighborhood</span>
                  </div>
                </div>

                {/* Status journey */}
                <div className="relative mt-6 space-y-0">
                  {steps.map((step, index) => {
                    const Icon = step.icon;
                    const isLast = index === steps.length - 1;

                    return (
                      <div
                        key={step.number}
                        className="relative flex gap-3 pb-5 last:pb-0 sm:gap-4"
                      >
                        <div className="flex w-8 shrink-0 flex-col items-center">
                          <div
                            className={`relative z-10 flex size-8 items-center justify-center rounded-full ${
                              isLast
                                ? "bg-emerald-500 text-white"
                                : "border border-border bg-muted text-muted-foreground"
                            }`}
                          >
                            {isLast ? (
                              <Check className="size-4" />
                            ) : (
                              <Icon className="size-4" />
                            )}
                          </div>

                          {!isLast && (
                            <div className="absolute bottom-0 top-8 w-px bg-border" />
                          )}
                        </div>

                        <div className="flex min-w-0 flex-1 items-center justify-between gap-2 pt-1">
                          <div>
                            <p
                              className={`text-sm font-medium ${
                                isLast
                                  ? "text-emerald-600 dark:text-emerald-400"
                                  : "text-foreground"
                              }`}
                            >
                              {step.title}
                            </p>
                            <p className="mt-1 text-xs leading-5 text-muted-foreground">
                              {isLast
                                ? "Completion evidence available"
                                : index === 0
                                  ? "Complaint submitted for review"
                                  : index === 1
                                    ? "Reviewed by the administration"
                                    : "Assigned for service"}
                            </p>
                          </div>

                          {isLast ? (
                            <CheckCircle2 className="size-4 shrink-0 text-emerald-500" />
                          ) : (
                            <Clock3 className="size-4 shrink-0 text-muted-foreground/60" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Completion note */}
                <div className="mt-6 flex items-start gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-4">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Clear progress at every stage
                    </p>
                    <p className="mt-1 text-xs leading-5 text-muted-foreground">
                      Citizens can check complaint status and view the
                      completion proof when the assigned work is finished.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative floating label */}
            <div className="absolute -right-2 -top-3 hidden items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 shadow-lg sm:flex lg:-right-4">
              <UserRoundCheck className="size-4 text-primary" />
              <span className="text-xs font-medium text-foreground">
                Citizen-first service
              </span>
            </div>
          </motion.div>
        </div>

        {/* Bottom call to action */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-14 flex flex-col gap-5 border-t border-border pt-8 sm:mt-16 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Every reported issue deserves attention.
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              Take the first step toward a better community with CityCare.
            </p>
          </div>

          <Link
            href="/citizen"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Get Started
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
