"use client"

import { Badge } from "@/components/ui/badge"
import { Code2, Server, Wrench, FileJson, Sparkles, Zap, Layers } from "lucide-react"

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    gradient: "from-blue-500 to-cyan-500",
    skills: ["JavaScript", "TypeScript", "C++"],
  },
  {
    title: "Frontend",
    icon: Layers,
    gradient: "from-violet-500 to-purple-500",
    skills: ["Next.js", "React", "Remix", "Tailwind CSS", "shadcn/ui", "HTML/CSS"],
  },
  {
    title: "APIs & Docs",
    icon: FileJson,
    gradient: "from-emerald-500 to-teal-500",
    skills: ["REST APIs", "JSON", "Swagger/OpenAPI", "FastAPI Documentation"],
  },
  {
    title: "Tools & Workflow",
    icon: Wrench,
    gradient: "from-amber-500 to-orange-500",
    skills: ["Git", "GitHub", "Jira", "Vercel", "Agile/Scrum", "CI/CD"],
  },
]

const coreCompetencies = [
  {
    icon: Server,
    title: "API Integration",
    description: "Experience integrating REST APIs using Swagger/OpenAPI and FastAPI documentation",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Modern Frontend",
    description: "Proficient in Next.js, React, TypeScript, and component-driven development",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Zap,
    title: "Agile Workflow",
    description: "Experienced with Jira, Git workflows, code reviews, and sprint-based development",
    gradient: "from-amber-500 to-orange-500",
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-medium">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Technologies and tools I use to build modern, production-ready web applications.
          </p>
        </div>

        {/* Skills Grid - Compact Cards */}
        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative bg-card rounded-xl border border-border hover:border-primary/40 transition-all duration-300 overflow-hidden"
            >
              {/* Top gradient bar */}
              <div className={`h-1 bg-gradient-to-r ${category.gradient}`} />
              
              <div className="p-5">
                {/* Header with icon and title inline */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${category.gradient} flex items-center justify-center shrink-0`}>
                    <category.icon className="text-white" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-xs font-medium bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
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
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto">
            {coreCompetencies.map((competency) => (
              <div
                key={competency.title}
                className="group relative p-5 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300"
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${competency.gradient} flex items-center justify-center mb-4`}>
                  <competency.icon className="text-white" size={22} />
                </div>

                {/* Content */}
                <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {competency.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {competency.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats bar */}
        <div className="mt-14 p-5 rounded-xl bg-card border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3">
              <div className="text-2xl font-bold text-primary mb-1">15+</div>
              <div className="text-xs text-muted-foreground">Technologies</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-primary mb-1">3+</div>
              <div className="text-xs text-muted-foreground">Projects Built</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-primary mb-1">1+</div>
              <div className="text-xs text-muted-foreground">Years Learning</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-xs text-muted-foreground">Passion</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
