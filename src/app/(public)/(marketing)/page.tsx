"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  CircleAlert,
  Droplets,
  Lightbulb,
  MapPin,
  Trash2,
} from "lucide-react";
import Link from "next/link";

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
      {/* Background decoration */}
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

      {/* Main Content */}
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
            Smart City Complaint Platform
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

          {/* Complaint Status */}
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
                  Complaint Status
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
    </main>
  );
};

export default HomePage;
