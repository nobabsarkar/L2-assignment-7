// "use client";

// import Link from "next/link";
// import {
//   ArrowDownRight,
//   ArrowRight,
//   ArrowUpRight,
//   CheckCircle2,
//   Construction,
//   Droplets,
//   Lightbulb,
//   MapPin,
//   ShieldCheck,
//   Sparkles,
//   Trees,
//   Trash2,
// } from "lucide-react";

// const services = [
//   {
//     number: "01",
//     icon: Construction,
//     title: "Roads & Infrastructure",
//     description:
//       "Report potholes, damaged roads, broken sidewalks, and other infrastructure problems.",
//     category: "PUBLIC INFRASTRUCTURE",
//   },
//   {
//     number: "02",
//     icon: Lightbulb,
//     title: "Street Lighting",
//     description:
//       "Help identify broken streetlights and poorly lit public areas in your community.",
//     category: "PUBLIC LIGHTING",
//   },
//   {
//     number: "03",
//     icon: Droplets,
//     title: "Water & Drainage",
//     description:
//       "Report water leakage, blocked drains, and drainage-related concerns.",
//     category: "WATER MANAGEMENT",
//   },
//   {
//     number: "04",
//     icon: Trash2,
//     title: "Waste Management",
//     description:
//       "Bring attention to waste accumulation and cleanliness issues in public spaces.",
//     category: "CLEANER COMMUNITIES",
//   },
//   {
//     number: "05",
//     icon: ShieldCheck,
//     title: "Public Safety",
//     description:
//       "Raise awareness of public-area hazards and issues that need attention.",
//     category: "COMMUNITY SAFETY",
//   },
//   {
//     number: "06",
//     icon: Trees,
//     title: "Parks & Public Spaces",
//     description:
//       "Help highlight damaged public facilities and maintenance needs in shared spaces.",
//     category: "COMMUNITY SPACES",
//   },
// ];

// const ServicePage = () => {
//   return (
//     <main className="min-h-screen overflow-hidden bg-background text-foreground">
//       {/* Hero */}
//       <section className="relative border-b border-border/60">
//         <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
//         <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

//         <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:py-32">
//           <div>
//             <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400">
//               <Sparkles className="h-4 w-4" />A smarter way to care for your
//               city
//             </div>

//             <h1 className="max-w-3xl text-4xl font-semibold leading-[1.12] tracking-tight sm:text-5xl lg:text-7xl">
//               Better cities start with{" "}
//               <span className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
//                 better action.
//               </span>
//             </h1>

//             <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
//               From damaged roads to drainage concerns, CityCare gives citizens a
//               simple way to report local problems and follow their journey
//               toward resolution.
//             </p>

//             <div className="mt-9 flex flex-col gap-3 sm:flex-row">
//               <Link
//                 href="/citizen"
//                 className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/20 transition hover:-translate-y-0.5 hover:bg-emerald-700"
//               >
//                 Report a Problem
//                 <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//               </Link>

//               <a
//                 href="#service-directory"
//                 className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background/70 px-6 py-3 text-sm font-semibold transition hover:bg-muted"
//               >
//                 Explore Services
//                 <ArrowDownRight className="h-4 w-4" />
//               </a>
//             </div>

//             <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-muted-foreground">
//               <span className="inline-flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-emerald-500" />
//                 Transparent tracking
//               </span>
//               <span className="inline-flex items-center gap-2">
//                 <CheckCircle2 className="h-4 w-4 text-emerald-500" />
//                 Organized service workflow
//               </span>
//             </div>
//           </div>

//           {/* Original CSS-based visual: no external image required */}
//           <div className="relative mx-auto w-full max-w-lg">
//             <div className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-emerald-500/15 via-transparent to-cyan-500/15 blur-2xl" />

//             <div className="relative overflow-hidden rounded-[1.75rem] border border-border/80 bg-card shadow-2xl shadow-black/5">
//               <div className="flex items-center justify-between border-b border-border/70 px-5 py-4 sm:px-6">
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
//                     <MapPin className="h-5 w-5" />
//                   </div>
//                   <div>
//                     <p className="font-semibold">CityCare</p>
//                     <p className="text-xs text-muted-foreground">
//                       Community service hub
//                     </p>
//                   </div>
//                 </div>
//                 <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
//                   Service directory
//                 </span>
//               </div>

//               <div className="p-5 sm:p-7">
//                 <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-800 p-6 text-white sm:p-8">
//                   <div className="absolute -right-10 -top-12 h-40 w-40 rounded-full border border-white/10" />
//                   <div className="absolute -right-2 -top-4 h-24 w-24 rounded-full border border-white/10" />

//                   <div className="relative">
//                     <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-emerald-50">
//                       <span className="h-2 w-2 rounded-full bg-emerald-300" />
//                       Your city, your voice
//                     </span>

//                     <h2 className="mt-6 max-w-xs text-3xl font-semibold leading-tight sm:text-4xl">
//                       Every concern deserves attention.
//                     </h2>

//                     <p className="mt-3 max-w-xs text-sm leading-6 text-emerald-50/80">
//                       Connect community concerns with an organized resolution
//                       process.
//                     </p>

//                     <div className="mt-8 flex items-end justify-between">
//                       <div>
//                         <p className="text-4xl font-semibold">06</p>
//                         <p className="mt-1 text-xs text-emerald-50/70">
//                           Example service areas
//                         </p>
//                       </div>
//                       <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
//                         <ShieldCheck className="h-7 w-7" />
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-5 grid grid-cols-2 gap-3">
//                   {services.slice(0, 4).map((service) => {
//                     const Icon = service.icon;

//                     return (
//                       <div
//                         key={service.number}
//                         className="rounded-xl border border-border/70 bg-muted/30 p-4 transition hover:border-emerald-500/40 hover:bg-emerald-500/5"
//                       >
//                         <Icon className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
//                         <p className="mt-3 text-sm font-medium">
//                           {service.title}
//                         </p>
//                       </div>
//                     );
//                   })}
//                 </div>

//                 <div className="mt-5 flex items-center justify-between rounded-xl border border-border/70 px-4 py-3">
//                   <div>
//                     <p className="text-sm font-medium">
//                       Make your community better
//                     </p>
//                     <p className="mt-1 text-xs text-muted-foreground">
//                       Start by reporting a local issue.
//                     </p>
//                   </div>
//                   <ArrowUpRight className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Service directory */}
//       <section
//         id="service-directory"
//         className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28"
//       >
//         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
//           <div className="max-w-2xl">
//             <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
//               What we cover
//             </p>
//             <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-5xl">
//               Services designed around{" "}
//               <span className="text-muted-foreground">real communities.</span>
//             </h2>
//           </div>

//           <p className="max-w-md text-sm leading-7 text-muted-foreground sm:text-base">
//             Explore the service areas represented in CityCare. Citizens can use
//             the reporting workflow to submit concerns supported by the
//             application.
//           </p>
//         </div>

//         <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
//           {services.map((service) => {
//             const Icon = service.icon;

//             return (
//               <article
//                 key={service.number}
//                 className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-border/70 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-xl hover:shadow-emerald-950/5 sm:p-7"
//               >
//                 <div className="flex items-start justify-between">
//                   <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-600 transition duration-300 group-hover:bg-emerald-600 group-hover:text-white dark:text-emerald-400">
//                     <Icon className="h-6 w-6" />
//                   </div>
//                   <span className="font-mono text-sm text-muted-foreground/60">
//                     /{service.number}
//                   </span>
//                 </div>

//                 <p className="mt-7 text-[10px] font-semibold tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
//                   {service.category}
//                 </p>

//                 <h3 className="mt-2 text-xl font-semibold tracking-tight">
//                   {service.title}
//                 </h3>

//                 <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
//                   {service.description}
//                 </p>

//                 <Link
//                   href="/citizen"
//                   className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold transition group-hover:text-emerald-600 dark:group-hover:text-emerald-400"
//                 >
//                   Report an issue
//                   <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
//                 </Link>

//                 <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-emerald-500/5 transition-transform duration-500 group-hover:scale-150" />
//               </article>
//             );
//           })}
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 sm:pb-28">
//         <div className="relative overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-emerald-700 via-emerald-800 to-teal-950 px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
//           <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full border border-white/10" />
//           <div className="pointer-events-none absolute -right-2 -top-10 h-44 w-44 rounded-full border border-white/10" />

//           <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
//             <div className="max-w-2xl">
//               <p className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200">
//                 <Sparkles className="h-4 w-4" />
//                 Be part of the change
//               </p>
//               <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
//                 See a problem? Help move it toward a solution.
//               </h2>
//               <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-50/80 sm:text-base">
//                 Start with a report. Follow the process. Help build a better
//                 community through CityCare.
//               </p>
//             </div>

//             <Link
//               href="/citizen"
//               className="group inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-900 transition hover:-translate-y-0.5 hover:bg-emerald-50 md:self-center"
//             >
//               Get Started
//               <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//             </Link>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ServicePage;

"use client";

import Link from "next/link";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Construction,
  Droplets,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  Trees,
  Trash2,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Construction,
    title: "Roads & Infrastructure",
    description:
      "Report damaged roads, potholes, and other infrastructure concerns.",
    category: "PUBLIC INFRASTRUCTURE",
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Street Lighting",
    description:
      "Highlight broken streetlights and poorly illuminated public areas.",
    category: "PUBLIC LIGHTING",
  },
  {
    number: "03",
    icon: Droplets,
    title: "Water & Drainage",
    description:
      "Bring attention to water leakage, blocked drains, and drainage concerns.",
    category: "WATER MANAGEMENT",
  },
  {
    number: "04",
    icon: Trash2,
    title: "Waste Management",
    description:
      "Report waste accumulation and cleanliness problems in public spaces.",
    category: "CLEANER COMMUNITIES",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Public Safety",
    description:
      "Raise concerns about hazards that may affect people in public areas.",
    category: "COMMUNITY SAFETY",
  },
  {
    number: "06",
    icon: Trees,
    title: "Parks & Public Spaces",
    description:
      "Highlight maintenance needs in parks and shared community spaces.",
    category: "COMMUNITY SPACES",
  },
];

const ServicePage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* Hero section */}
      <section className="relative border-b border-border">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="h-4 w-4" />
              CityCare Service Directory
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Better communities begin with{" "}
              <span className="text-primary">meaningful action.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              Discover how CityCare helps citizens report community concerns,
              follow complaint progress, and connect issues with an organized
              service workflow.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/citizen"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/10 transition hover:-translate-y-0.5 hover:opacity-90"
              >
                Report a Problem
                <ArrowUpRight className="h-4 w-4" />
              </Link>

              <a
                href="#service-directory"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold transition hover:bg-muted"
              >
                Explore Services
                <ArrowDownRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Complaint tracking
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Organized workflow
              </span>
            </div>
          </div>

          {/* Service preview */}
          <div className="relative mx-auto w-full max-w-xl">
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
                      Community service hub
                    </p>
                  </div>
                </div>

                <span className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">
                  Our services
                </span>
              </div>

              <div className="p-4 sm:p-6">
                <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
                  <div className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-primary-foreground/15" />
                  <div className="pointer-events-none absolute -right-2 -top-2 h-24 w-24 rounded-full border border-primary-foreground/15" />

                  <div className="relative">
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-1.5 text-xs">
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Built around your community
                    </span>

                    <h2 className="mt-6 max-w-sm text-3xl font-bold leading-tight sm:text-4xl">
                      Every concern deserves attention.
                    </h2>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-primary-foreground/80">
                      Report a local issue and follow its journey through the
                      service process.
                    </p>

                    <div className="mt-8 flex items-end justify-between">
                      <div>
                        <p className="text-4xl font-bold">06</p>
                        <p className="mt-1 text-xs text-primary-foreground/75">
                          Example service categories
                        </p>
                      </div>

                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10">
                        <Sparkles className="h-7 w-7" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {services.slice(0, 4).map((service) => {
                    const Icon = service.icon;

                    return (
                      <div
                        key={service.number}
                        className="rounded-xl border border-border bg-muted/30 p-4 transition hover:border-primary/40 hover:bg-primary/5"
                      >
                        <Icon className="h-5 w-5 text-primary" />
                        <p className="mt-3 text-sm font-medium">
                          {service.title}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 flex items-center justify-between gap-3 rounded-xl border border-border p-4">
                  <div>
                    <p className="text-sm font-semibold">
                      Make a difference locally
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Start with a community concern.
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service directory */}
      <section
        id="service-directory"
        className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
      >
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What we cover
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Services for{" "}
              <span className="text-muted-foreground">better communities.</span>
            </h2>
          </div>

          <p className="max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">
            Explore the example service areas below. Keep the categories that
            match the reporting options supported by your application.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 sm:p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-sm text-muted-foreground/70">
                    /{service.number}
                  </span>
                </div>

                <p className="mt-7 text-[10px] font-semibold tracking-[0.16em] text-primary">
                  {service.category}
                </p>

                <h3 className="mt-2 text-xl font-semibold tracking-tight">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>

                <Link
                  href="/citizen"
                  className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold transition hover:text-primary"
                >
                  Report an issue
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <div className="pointer-events-none absolute -bottom-12 -right-12 h-28 w-28 rounded-full bg-primary/5 transition-transform duration-500 group-hover:scale-150" />
              </article>
            );
          })}
        </div>
      </section>

      {/* Call to action */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-primary/5 px-6 py-10 sm:px-10 sm:py-14 lg:px-14">
          <div className="pointer-events-none absolute -right-12 -top-16 h-56 w-56 rounded-full border border-primary/10" />

          <div className="relative flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <Sparkles className="h-4 w-4" />
                Be part of the change
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                See a problem? Take the first step.
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground sm:text-base">
                Use CityCare to submit a concern and follow the available
                reporting workflow toward resolution.
              </p>
            </div>

            <Link
              href="/citizen"
              className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5 hover:opacity-90 md:self-center"
            >
              Get Started
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServicePage;
