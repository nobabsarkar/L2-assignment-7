"use client";

import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Eye,
  HeartHandshake,
  Lightbulb,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Target,
  Users,
  Workflow,
} from "lucide-react";

const values = [
  {
    number: "01",
    icon: Users,
    title: "Citizen First",
    description:
      "We put citizens at the center of the process, making it easier to report local concerns and stay informed.",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Transparency",
    description:
      "Clear complaint statuses and an organized workflow help citizens understand what happens after they report an issue.",
  },
  {
    number: "03",
    icon: HeartHandshake,
    title: "Shared Responsibility",
    description:
      "We encourage citizens, administrators, and service workers to work together toward better communities.",
  },
  {
    number: "04",
    icon: Lightbulb,
    title: "Practical Innovation",
    description:
      "We use technology to make civic service reporting more accessible, structured, and easier to follow.",
  },
];

const workflow = [
  {
    number: "01",
    title: "Report a concern",
    description:
      "Citizens submit a complaint with relevant details and location information.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Review and organize",
    description:
      "Authorized administrators review complaints and manage the next steps.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Coordinate services",
    description:
      "Eligible complaints can move through payment and service-worker assignment where applicable.",
    icon: Workflow,
  },
  {
    number: "04",
    title: "Track progress",
    description:
      "Citizens can follow available status updates as the complaint moves toward resolution.",
    icon: CheckCircle2,
  },
];

const AboutPage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero */}
      <section className="relative border-b border-border">
        <div className="pointer-events-none absolute -right-32 -top-28 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <HeartHandshake className="h-4 w-4" />
              About CityCare
            </div>

            <h1 className="mt-7 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
              A better way to care for{" "}
              <span className="text-primary">our communities.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              CityCare is a smart city complaint and service management platform
              designed to connect citizens with a more organized process for
              reporting local problems, tracking progress, and coordinating
              service responses.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/citizen"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Get Started
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <Link
                href="/services"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold transition hover:bg-muted"
              >
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Citizen-focused
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Workflow-driven
              </span>
            </div>
          </div>

          {/* Brand statement panel */}
          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl" />

            <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl shadow-black/5">
              <div className="flex items-center justify-between border-b border-border px-5 py-4 sm:px-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold">CityCare</p>
                    <p className="text-xs text-muted-foreground">
                      Smart city service platform
                    </p>
                  </div>
                </div>
                <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
                  Our purpose
                </span>
              </div>

              <div className="relative overflow-hidden bg-primary p-7 text-primary-foreground sm:p-9">
                <div className="pointer-events-none absolute -right-12 -top-10 h-52 w-52 rounded-full border border-primary-foreground/15" />
                <div className="pointer-events-none absolute right-2 top-0 h-32 w-32 rounded-full border border-primary-foreground/15" />

                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/75">
                    Our belief
                  </p>
                  <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
                    Small actions can create meaningful change.
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-primary-foreground/80">
                    When citizens can report concerns and follow their progress,
                    community problem-solving becomes more structured and
                    visible.
                  </p>

                  <div className="mt-9 flex items-center gap-3 border-t border-primary-foreground/20 pt-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-foreground/10">
                      <HeartHandshake className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">
                        Better service. Stronger communities.
                      </p>
                      <p className="mt-1 text-xs text-primary-foreground/70">
                        One report at a time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-2">
          <article className="group rounded-2xl border border-border bg-card p-6 transition hover:border-primary/40 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our mission
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Make civic reporting simpler and more transparent.
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
              Our mission is to provide a clear digital channel for citizens to
              report local concerns, help administrators organize complaints,
              and enable service workers to manage assigned work through a
              structured process.
            </p>
          </article>

          <article className="group rounded-2xl border border-border bg-muted/30 p-6 transition hover:border-primary/40 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Eye className="h-6 w-6" />
            </div>

            <p className="mt-7 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Our vision
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              A more connected and responsive community.
            </h2>

            <p className="mt-4 text-sm leading-8 text-muted-foreground sm:text-base">
              We envision a future where reporting a community problem is
              straightforward, responsibilities are better coordinated, and
              citizens can understand how their concerns progress through a
              service workflow.
            </p>
          </article>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-border bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What guides us
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              The principles behind CityCare.
            </h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Good civic technology is not only about features. It is about
              making everyday processes easier to understand and use.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm text-muted-foreground/60">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-6 text-lg font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {value.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* How CityCare works */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The process
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              From a reported concern to a clearer next step.
            </h2>

            <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
              CityCare brings key participants into one organized workflow,
              helping citizens report problems and helping authorized teams
              coordinate the next steps.
            </p>

            <Link
              href="/services"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
            >
              Learn about our services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative">
            <div className="absolute bottom-8 left-[21px] top-8 w-px bg-border sm:left-[23px]" />

            <div className="space-y-7">
              {workflow.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.number}
                    className="relative flex gap-4 sm:gap-6"
                  >
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-primary sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5" />
                    </div>

                    <div className="flex-1 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="font-mono text-xs text-primary">
                          STEP {step.number}
                        </span>
                        <h3 className="text-base font-semibold sm:text-lg">
                          {step.title}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-primary/10" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-primary">
                Let&apos;s make a difference
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Your community matters. Your voice matters.
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                Take the first step by using CityCare to report a concern
                through the available complaint workflow.
              </p>
            </div>

            <Link
              href="/citizen"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90 md:self-center"
            >
              Explore CityCare
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
