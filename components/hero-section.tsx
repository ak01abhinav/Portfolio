"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ResumeDialog } from "@/components/resume-dialog";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Rocket,
  Sparkles,
} from "lucide-react";
import { StaggeredText } from "@/components/staggered-text";

export function HeroSection() {
  const text1 = "Engineering the web,";
  const text2 = "pixel by pixel.";

  // text1 = 20 chars, text2 = 15 chars (including spaces).
  // Total stagger time: 0.2s + 35 * 0.03s = 1.25s. Last char finishes at ~1.75s.
  const subtitleDelay = 1.4;
  const buttonsDelay = 1.7;
  const iconsDelay = 2.0;
  const rightPanelDelay = 1.2;

  const proofPoints = [
    {
      value: "6+ months",
      label: "shipping features for an enterprise HR SaaS team",
    },
    {
      value: "Next.js + TS",
      label: "for fast, scalable, production-ready interfaces",
    },
    {
      value: "24h",
      label: "typical response time for new opportunities",
    },
  ];

  const focusAreas = [
    {
      icon: Code2,
      title: "Frontend systems",
      description: "Component architecture, state flows, and performance-minded UI.",
    },
    {
      icon: Rocket,
      title: "Product velocity",
      description: "Shipping polished features quickly without cutting quality.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Real-world delivery",
      description: "Built for teams, deadlines, and production constraints.",
    },
    {
      icon: MapPin,
      title: "Remote-ready",
      description: "Based in Greater Noida and open to global collaboration.",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/ak01abhinav",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/ak01abhinav",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:abhinav01.ak@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-4 pb-16 pt-24"
    >
      <div className="absolute inset-0 bg-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(84,111,255,0.16),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(67,205,255,0.14),transparent_24%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(circle_at_center,black,transparent_78%)]" />
      <div className="absolute left-[10%] top-[18%] h-80 w-80 rounded-full bg-primary/20 blur-[128px]" />
      <div className="absolute bottom-[10%] right-[8%] h-[28rem] w-[28rem] rounded-full bg-indigo-500/20 blur-[148px]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 shadow-[0_0_20px_rgba(84,111,255,0.14)] backdrop-blur-md"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Software Engineer • Available for Hire
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground md:text-sm"
          >
            Hi, I'm Abhinav Kumar
          </motion.p>

          <h1 className="mb-8 text-balance text-5xl font-black leading-[1.02] tracking-tighter sm:text-6xl md:text-7xl xl:text-[5.6rem]">
            <StaggeredText text={text1} className="text-foreground" />
            <br />
            <StaggeredText
              text={text2}
              charIndexOffset={text1.length}
              className="bg-gradient-to-r from-primary via-sky-300 to-indigo-300 bg-clip-text text-transparent"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: subtitleDelay,
            }}
            className="mb-10 max-w-2xl text-pretty text-lg font-medium leading-relaxed text-muted-foreground/90 md:text-xl"
          >
            I build interfaces that feel sharp, load fast, and hold up in
            production. With a strong focus on{" "}
            <strong className="text-foreground">
              Next.js, TypeScript, and UX detail
            </strong>
            , I turn ideas into{" "}
            <strong className="text-foreground transition-all">
              high-performance, production-grade products
            </strong>
            that users enjoy and teams can trust.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: buttonsDelay }}
            className="flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="group relative h-14 w-full overflow-hidden rounded-xl border-none bg-primary px-8 text-base font-semibold text-primary-foreground shadow-[0_0_30px_-5px_var(--primary)] transition-all duration-300 hover:shadow-[0_0_40px_-5px_var(--primary)] sm:w-auto"
            >
              <Link href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  View Selected Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
              </Link>
            </Button>

            <ResumeDialog />

            <Button
              asChild
              variant="outline"
              size="lg"
              className="h-14 w-full rounded-xl border-border/50 bg-background/50 px-8 text-base font-semibold backdrop-blur-md transition-all duration-300 hover:bg-secondary/50 sm:w-auto"
            >
              <Link href="#contact">Contact Me</Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: iconsDelay }}
            className="mt-10 grid w-full gap-4 sm:grid-cols-3"
          >
            {proofPoints.map((point, i) => (
              <motion.div
                key={point.value}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: iconsDelay + i * 0.1,
                }}
                className="rounded-2xl border border-border/40 bg-card/55 px-5 py-4 text-left shadow-[0_16px_40px_rgba(0,0,0,0.2)] backdrop-blur-xl"
              >
                <p className="text-xl font-black text-foreground">{point.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {point.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: iconsDelay + 0.2 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start"
          >
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full border border-border/40 bg-secondary/20 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                aria-label={social.label}
              >
                <social.icon size={16} />
                <span>{social.label}</span>
              </Link>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: rightPanelDelay }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/20 via-sky-400/10 to-transparent blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border/50 bg-card/70 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl md:p-8">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-sm font-medium text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Open to internships and freelance work
              </div>
              <div className="rounded-full border border-border/40 bg-background/50 px-3 py-1.5 text-sm text-muted-foreground">
                Currently building for Appeneure
              </div>
            </div>

            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.26em] text-primary/80">
                What I bring
              </p>
              <h2 className="mt-4 max-w-md text-3xl font-black leading-tight tracking-tight text-foreground md:text-4xl">
                Clean frontend execution with product taste and engineering discipline.
              </h2>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                I care about how a feature reads in code, how it feels in the
                browser, and how reliably it ships for real users.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {focusAreas.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: rightPanelDelay + 0.2 + index * 0.08,
                  }}
                  className="rounded-2xl border border-border/40 bg-background/35 p-4"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon size={20} />
                  </div>
                  <h3 className="text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border/40 bg-background/45 px-4 py-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Based in
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Greater Noida, India
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground">
                  Focus
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Next.js, TypeScript, Tailwind CSS
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
