"use client";

import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Server,
  Wrench,
  FileJson,
  Sparkles,
  Layers,
  Terminal,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Architecture",
    icon: Layers,
    color: "from-indigo-500 to-blue-500",
    skills: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Redux/Zustand",
    ],
  },
  {
    title: "API & Backend Comm",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    skills: [
      "RESTful APIs",
      "Swagger/OpenAPI",
      "JSON",
      "FastAPI Docs",
      "Axios/Fetch API",
    ],
  },
  {
    title: "Core Languages",
    icon: Code2,
    color: "from-emerald-500 to-teal-500",
    skills: ["JavaScript (ES6+)", "TypeScript", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Tooling & Delivery",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: ["Git/GitHub", "Jira", "Agile Workflow", "Vercel", "CI/CD Basics"],
  },
];

const coreCompetencies = [
  {
    icon: Terminal,
    title: "End-to-End Ownership",
    description:
      "I don't just write components. I integrate with backend APIs, manage state, and ensure optimal performance.",
    color: "from-indigo-500 to-blue-500",
  },
  {
    icon: FileJson,
    title: "API-First Mentality",
    description:
      "Deep experience reading Swagger/OpenAPI docs and successfully integrating complex backend endpoints.",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Sparkles,
    title: "Pixel-Perfect UI",
    description:
      "Obsessive attention to design details, micro-animations, and responsive layouts that delight users.",
    color: "from-emerald-500 to-teal-500",
  },
];

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-24 px-4 relative overflow-hidden bg-background"
    >
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(var(--primary),0.15)]">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold tracking-wide uppercase">
              The Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
              Production.
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed">
            I specialize in the modern web stack. My tooling choices are
            deliberate, focusing on developer experience, type safety, and raw
            performance.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-card/60 backdrop-blur-md rounded-2xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-lg p-6"
            >
              {/* Animated glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none ${category.color}" />

              <div className="flex flex-col h-full relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shrink-0 shadow-lg`}
                  >
                    <category.icon className="text-white w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground tracking-tight">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2.5 mt-auto">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="px-3 py-1.5 text-sm font-medium bg-secondary/80 border border-border/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Core Competencies */}
        <div className="mt-20">
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {coreCompetencies.map((competency) => (
              <div
                key={competency.title}
                className="group relative p-8 rounded-2xl bg-secondary/30 border border-border/50 hover:bg-secondary/50 transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-full bg-gradient-to-br ${competency.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:-translate-y-1 transition-transform duration-300`}
                >
                  <competency.icon className="text-white w-5 h-5" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                  {competency.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Confident Stats */}
        <div className="mt-16 p-8 rounded-2xl bg-card/40 border border-border/50 backdrop-blur-sm max-w-5xl mx-auto relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-indigo-500/5 to-purple-500/5" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
            <div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 mb-2">
                6+
              </div>
              <div className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                Months Enterprise Exp
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 mb-2">
                50+
              </div>
              <div className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                APIs Integrated
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 mb-2">
                99%
              </div>
              <div className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                Task Completion
              </div>
            </div>
            <div>
              <div className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400 mb-2">
                100%
              </div>
              <div className="text-sm font-semibold tracking-wider text-muted-foreground uppercase">
                Modern Stack Adoption
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
