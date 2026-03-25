"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  ArrowRight,
} from "lucide-react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully! I'll get back to you soon.");
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-primary text-sm font-bold tracking-wide uppercase">
                Actively Exploring Roles
              </span>
            </div>

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
                    className="p-5 rounded-2xl bg-secondary/50 border-border/50 focus-visible:ring-primary/50 resize-none text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-14 rounded-2xl text-base font-bold group relative overflow-hidden bg-primary text-primary-foreground border-none shadow-[0_0_10px_-5px_var(--primary)] hover:shadow-[0_0_15px_-5px_var(--primary)] transition-all duration-300 mt-2"
                >
                  <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    {!isSubmitting && (
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    )}
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
