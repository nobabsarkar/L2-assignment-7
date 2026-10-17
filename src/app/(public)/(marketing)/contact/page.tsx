/** biome-ignore-all lint/a11y/useSemanticElements: <explanation> */
"use client";

import { useState, type FormEvent } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  LoaderCircle,
  Mail,
  MapPin,
  MessageSquare,
  ShieldCheck,
  Send,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { toast } from "@/components/ui/toast";

const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    setIsSubmitting(true);
    setIsSent(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Unable to send your message.");
      }

      form.reset();
      setIsSent(true);

      toast.add({
        title: "Message Sent Successfully",
        description: "We are talk to you as soon as possible. Thank You",
        type: "success",
      });
    } catch (error) {
      toast.add({
        title: "Message Sending Failed",
        description:
          error instanceof Error
            ? error.message
            : "Something went wrong. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero */}
      <section className="relative overflow-hidden border-b bg-muted/30">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-medium">
              <MessageSquare className="h-4 w-4 text-primary" />
              CityCare Support
            </div>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Let&apos;s start a{" "}
              <span className="text-primary">conversation.</span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-lg">
              Questions, feedback, or ideas for a better city? Send our team a
              message. We&apos;re here to help make public services simpler,
              more transparent, and more accessible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* Information */}
          <aside className="flex flex-col">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              Get in touch
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl">
              We&apos;d love to hear from you.
            </h2>

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              Whether you need assistance with a complain, have a question about
              our services, or want to suggest an improvement, your feedback
              matters to us.
            </p>

            <div className="mt-9 space-y-7">
              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email our team</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Send your questions and feedback through the form.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Clock3 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Response time</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Our team will review your message and respond as soon as
                    possible.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Serving our community</h3>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    CityCare connects citizens, service workers, and
                    administrators to improve urban services.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-start gap-3 border-t pt-6">
              <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <p className="text-xs leading-6 text-muted-foreground sm:text-sm">
                Your contact information is used to respond to your inquiry.
                Please avoid including passwords or other sensitive information
                in your message.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="min-w-0 lg:border-l lg:pl-10 xl:pl-14">
            <div className="mb-8">
              <h2 className="text-xl font-bold sm:text-2xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Fill in the details below and we&apos;ll get back to you.
              </p>
            </div>

            {isSent ? (
              <div
                role="status"
                className="flex min-h-72 flex-col items-center justify-center border-y py-12 text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle2 className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">
                  Message sent successfully!
                </h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
                  Thank you for contacting CityCare. Your message has been
                  submitted to our support team.
                </p>
                <Button
                  className="mt-6"
                  variant="outline"
                  onClick={() => setIsSent(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Name"
                      autoComplete="name"
                      maxLength={100}
                      required
                      disabled={isSubmitting}
                      className="h-11"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Email"
                      autoComplete="email"
                      maxLength={254}
                      required
                      disabled={isSubmitting}
                      className="h-11"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What would you like to discuss?"
                    maxLength={150}
                    required
                    disabled={isSubmitting}
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    rows={6}
                    maxLength={5000}
                    required
                    disabled={isSubmitting}
                    className="min-h-36 resize-y"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                      Sending message...
                    </>
                  ) : (
                    <>
                      Send message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="border-t bg-muted/30">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <div>
            <h2 className="font-semibold">
              Together, we can build better communities.
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              CityCare — Smarter services, stronger communities.
            </p>
          </div>

          <Button className="cursor-pointer" variant="outline">
            <Link className="flex items-center" href="/about">
              Discover CityCare
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
