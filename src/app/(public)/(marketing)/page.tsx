"use client";

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
import HeroSection from "@/components/Home/HeroSection";

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
    <main>
      <HeroSection />

      {/* our service */}
      {/* <section id="services" className="px-4  sm:px-6  lg:px-8">
        <div className="mx-auto max-w-7xl">
      
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

       
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
  
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
      </section> */}

      {/* how it is work */}
      {/* <section
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

   
          <div className="relative grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
         
            <div className="absolute left-[22%] right-[22%] top-12 hidden border-t-2 border-dashed border-primary/20 md:block" />

     
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
      </section> */}

      {/*  */}
      {/* <section
        id="statistics"
        className="relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-7xl">
  
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

    
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
     
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
      </section> */}
    </main>
  );
};

export default HomePage;
