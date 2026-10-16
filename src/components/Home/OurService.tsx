/** biome-ignore-all lint/a11y/noSvgWithoutTitle: <explanation> */

"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  Construction,
  Droplets,
  Lightbulb,
  MapPin,
  Recycle,
  ShieldAlert,
  Trees,
  Wrench,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Roads & Potholes",
    description: "Damaged roads, potholes, and unsafe street surfaces.",
    icon: Construction,
    category: "INFRASTRUCTURE",
  },
  {
    number: "02",
    title: "Street Lighting",
    description: "Broken streetlights and poorly lit public areas.",
    icon: Lightbulb,
    category: "PUBLIC LIGHTING",
  },
  {
    number: "03",
    title: "Water & Drainage",
    description: "Waterlogging, blocked drains, and leakage issues.",
    icon: Droplets,
    category: "WATER SERVICES",
  },
  {
    number: "04",
    title: "Waste Management",
    description: "Overflowing bins and uncollected public waste.",
    icon: Recycle,
    category: "CLEAN ENVIRONMENT",
  },
  {
    number: "05",
    title: "Public Safety",
    description: "Report visible hazards that need municipal attention.",
    icon: ShieldAlert,
    category: "COMMUNITY SAFETY",
  },
  {
    number: "06",
    title: "Public Spaces",
    description: "Damaged parks, public facilities, and shared spaces.",
    icon: Trees,
    category: "COMMUNITY SPACES",
  },
];

export default function OurService() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-muted/30 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Editorial heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="grid gap-6 md:grid-cols-[1fr_auto] md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Civic services directory
              </span>
            </div>

            <h2
              id="services-heading"
              className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              A better city starts
              <br className="hidden sm:block" /> with{" "}
              <span className="text-primary">better services.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-muted-foreground md:pb-1 md:text-base">
            From damaged roads to overflowing drains, CityCare helps citizens
            report civic problems so they can be reviewed and addressed.
          </p>
        </motion.div>

        {/* Featured service + directory */}
        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Featured service panel */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground sm:min-h-[360px] sm:p-8"
          >
            {/* Abstract city-street illustration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 top-8 opacity-[0.13]"
            >
              <svg
                viewBox="0 0 240 240"
                fill="none"
                className="size-56 sm:size-64"
              >
                <path
                  d="M120 0V240M0 120H240M35 35L205 205M205 35L35 205"
                  stroke="currentColor"
                  strokeWidth="1"
                />
                <circle
                  cx="120"
                  cy="120"
                  r="85"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle
                  cx="120"
                  cy="120"
                  r="55"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <path
                  d="M120 65L145 120L120 175L95 120L120 65Z"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="relative">
              <div className="mb-8 flex size-14 items-center justify-center rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10">
                <Construction className="size-7" />
              </div>

              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
                Featured service · 01
              </span>

              <h3 className="mt-3 max-w-sm text-2xl font-bold tracking-tight sm:text-3xl">
                Safer roads.
                <br />
                Stronger communities.
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-primary-foreground/80">
                Help bring attention to damaged roads, potholes, and other
                infrastructure problems in your neighborhood.
              </p>
            </div>

            <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-primary-foreground/20 pt-5">
              <div className="flex items-center gap-2 text-xs font-medium text-primary-foreground/80">
                <MapPin className="size-4" />
                Community infrastructure
              </div>
              <ArrowDownRight className="size-5 shrink-0" />
            </div>
          </motion.div>

          {/* Service directory */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
            {services.slice(1).map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: shouldReduceMotion ? 0 : index * 0.07,
                  }}
                  className="group flex min-h-[170px] flex-col rounded-2xl border border-border/70 bg-card p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" strokeWidth={1.8} />
                    </div>

                    <span className="font-mono text-xs text-muted-foreground/70">
                      {service.number}
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-primary">
                      {service.category}
                    </p>

                    <h3 className="text-base font-semibold text-foreground">
                      {service.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45 }}
          className="mt-8 flex flex-col gap-4 rounded-2xl border border-border/70 bg-card p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Wrench className="size-5" />
            </div>

            <div>
              <h3 className="font-semibold text-foreground">
                Not seeing your issue?
              </h3>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                Use the complaint form to describe another civic problem.
              </p>
            </div>
          </div>

          <Link
            href="/citizen"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-lg border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40 hover:bg-muted sm:w-auto"
          >
            Report an Issue
            <ArrowRight className="size-4" />
          </Link>
        </motion.div>

        <p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
          Helping citizens report problems and supporting more accountable
          municipal services.
        </p>
      </div>
    </section>
  );
}
