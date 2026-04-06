"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Spinner } from "@/components/ui/spinner";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import confetti from "canvas-confetti";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Something went wrong.");
      }

      setFormData({ name: "", email: "", message: "" });
      setShowSuccessDialog(true);

      const duration = 2000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 10,
          ticks: 300,
          angle: 270,
          spread: 180,
          origin: { x: Math.random(), y: -0.1 },
          startVelocity: 20,
          gravity: 0.8,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };
      frame();
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error
          ? err.message
          : "Failed to send. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 bg-secondary/20 relative overflow-hidden"
    >
      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Contact Info */}
          <div>
            {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-primary text-sm font-bold tracking-wide uppercase">
                Actively Exploring Roles
              </span>
            </div> */}

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-[1.1] tracking-tight text-balance">
              Let&apos;s build the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                future together.
              </span>
            </h2>

            <p className="text-lg text-muted-foreground/90 leading-relaxed mb-10 max-w-md">
              Whether you have a role available, a project idea, or just want to
              chat about engineering—my inbox is always open. I reply within 24
              hours.
            </p>

            <div className="space-y-6 mb-12">
              <Link
                href="mailto:abhinav01.ak@gmail.com"
                className="flex items-center gap-4 group w-fit"
              >
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center group-hover:border-primary/50 group-hover:bg-primary/5 transition-all duration-300 shadow-sm">
                  <Mail
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                    size={24}
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                    Email
                  </p>
                  <p className="text-foreground text-lg group-hover:text-primary transition-colors font-medium">
                    abhinav01.ak@gmail.com
                  </p>
                </div>
              </Link>

              <div className="flex items-center gap-4 w-fit">
                <div className="w-14 h-14 rounded-2xl bg-card border border-border/50 flex items-center justify-center shadow-sm">
                  <MapPin className="text-muted-foreground" size={24} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                    Location
                  </p>
                  <p className="text-foreground text-lg font-medium">
                    Greater Noida, India
                  </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <Link
                href="https://github.com/ak01abhinav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground group transition-all duration-300 shadow-sm"
              >
                <Github
                  size={20}
                  className="text-muted-foreground group-hover:text-white transition-colors"
                />
              </Link>
              <Link
                href="https://linkedin.com/in/ak01abhinav"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-card border border-border/50 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground group transition-all duration-300 shadow-sm"
              >
                <Linkedin
                  size={20}
                  className="text-muted-foreground group-hover:text-white transition-colors"
                />
              </Link>
            </div>
          </div>

          {/* Right Column - Premium Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-indigo-500/10 to-transparent rounded-[2.5rem] blur-2xl -z-10" />
            <div className="bg-card/80 backdrop-blur-xl border border-border/50 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-muted-foreground uppercase tracking-wider ml-1"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="h-14 px-5 rounded-2xl bg-secondary/50 border-border/50 focus-visible:ring-primary/50 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-muted-foreground uppercase tracking-wider ml-1"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="h-14 px-5 rounded-2xl bg-secondary/50 border-border/50 focus-visible:ring-primary/50 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-bold text-muted-foreground uppercase tracking-wider ml-1"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    className="p-5 rounded-2xl bg-secondary/50 border-border/50 focus-visible:ring-primary/50 resize-none text-base max-h-[225px] overflow-y-auto contact-scroll"
                  />
                </div>

                {submitError && (
                  <p className="text-sm text-red-400 text-center -mb-2">
                    {submitError}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-2xl text-base font-bold group relative overflow-hidden bg-primary text-primary-foreground border-none shadow-[0_0_10px_-5px_var(--primary)] hover:shadow-[0_0_15px_-5px_var(--primary)] transition-all duration-300 mt-2"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Spinner className="w-5 h-5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={showSuccessDialog} onOpenChange={setShowSuccessDialog}>
        <DialogContent
          showCloseButton={false}
          className="max-w-xs rounded-3xl border border-border/30 bg-[#1a1d24] p-8 shadow-2xl"
        >
          <div className="flex flex-col items-center text-center gap-5">
            {/* Icon badge */}
            <div className="w-16 h-16 rounded-full bg-[#2a2d36] flex items-center justify-center shadow-inner">
              <CheckCircle2 className="w-8 h-8 text-blue-400" strokeWidth={2} />
            </div>

            <DialogHeader className="gap-2">
              <DialogTitle className="text-[1.35rem] flex justify-center font-black text-foreground tracking-tight">
                Message Sent!
              </DialogTitle>
              <DialogDescription className="text-muted-foreground text-sm leading-relaxed">
                Your message has been successfully sent to the recipient. We
                will get back to you soon.
              </DialogDescription>
            </DialogHeader>

            {/* Done button – pill, blue gradient */}
            <Button
              onClick={() => setShowSuccessDialog(false)}
              className="w-full h-12 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 border-none shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300"
            >
              Done
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
