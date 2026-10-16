"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowUpRight,
  ClipboardCheck,
  CreditCard,
  FilePlus2,
  GitBranch,
  MapPin,
  ShieldCheck,
  Users,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "Easy Complain Reporting",
    description:
      "Report civic issues with a clear description, location, and photo so the right team can understand the problem.",
    icon: FilePlus2,
    accent: "from-blue-500/15 to-cyan-500/5",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    number: "02",
    title: "Real-Time Status Tracking",
    description:
      "Follow your complain from submission to resolution with clear status updates at every stage.",
    icon: GitBranch,
    accent: "from-violet-500/15 to-purple-500/5",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    number: "03",
    title: "Role-Based Dashboards",
    description:
      "Give citizens, administrators, and service workers dedicated dashboards designed for their responsibilities.",
    icon: Users,
    accent: "from-emerald-500/15 to-teal-500/5",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    number: "04",
    title: "Efficient Worker Assignment",
    description:
      "Help administrators assign service workers and let workers manage tasks through completion.",
    icon: ClipboardCheck,
    accent: "from-amber-500/15 to-orange-500/5",
    iconColor: "text-amber-600 dark:text-amber-400",
  },
  {
    number: "05",
    title: "Secure Online Payments",
    description:
      "Support payments for eligible paid services through the integrated online payment workflow.",
    icon: CreditCard,
    accent: "from-sky-500/15 to-indigo-500/5",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    number: "06",
    title: "Verified Work Completion",
    description:
      "Allow service workers to submit completion details and proof images to support transparent service delivery.",
    icon: ShieldCheck,
    accent: "from-rose-500/15 to-pink-500/5",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
];

export default function KeyFeatures() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="key-features"
      aria-labelledby="key-features-heading"
      className="relative isolate overflow-hidden py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 -z-10 size-72 rounded-full bg-blue-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 -z-10 size-72 rounded-full bg-emerald-500/10 blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 20,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300">
            <MapPin className="size-4" />
            Built for Smarter Cities
          </div>

          <h2
            id="key-features-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Everything You Need for{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Better City Services
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            CityCare connects citizens, administrators, and service workers in
            one platform to make civic issue reporting and service management
            simpler, more transparent, and more efficient.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.number}
                initial={{
                  opacity: 0,
                  y: shouldReduceMotion ? 0 : 24,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: shouldReduceMotion ? 0 : index * 0.08,
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : { y: -5, transition: { duration: 0.2 } }
                }
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-6 shadow-sm transition-colors duration-300 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 sm:p-7"
              >
                {/* Card gradient */}
                <div
                  aria-hidden="true"
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${feature.accent} opacity-60`}
                />

                <div className="relative flex items-start justify-between">
                  <div
                    className={`flex size-12 items-center justify-center rounded-xl border border-border/60 bg-background shadow-sm ${feature.iconColor}`}
                  >
                    <Icon className="size-6" strokeWidth={1.8} />
                  </div>

                  <span className="font-mono text-sm text-muted-foreground/60">
                    {feature.number}
                  </span>
                </div>

                <div className="relative mt-7 flex-1">
                  <h3 className="text-xl font-semibold tracking-tight text-card-foreground">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                    {feature.description}
                  </p>
                </div>

                <div className="relative mt-6 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  <span>Designed for better service</span>
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom message */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 12,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:mt-14 sm:flex-row"
        >
          <span className="inline-flex size-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="size-4" />
          </span>

          <p className="text-sm leading-6 text-muted-foreground sm:text-base">
            One connected platform. Clearer processes. Better civic services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
