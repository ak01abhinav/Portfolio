import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github, FolderGit2 } from "lucide-react";

const projects = [
  {
    title: "QuickSummary AI",
    problem: "Information overload makes consuming long articles tedious.",
    impact:
      "Engineered an AI-native web app integrating Google Gemini API for instant, highly accurate content summarization. Architected with Next.js and fully automated with GitHub Actions CI/CD to ensure zero-downtime deployments.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QuickSummary-VOleiJ5bR3nsXZU6G5xraq8DW9u6gh.png",
    tags: ["Next.js", "TypeScript", "Gemini API", "GitHub Actions"],
    liveUrl: "#",
    githubUrl: "https://github.com/ak01abhinav",
  },
  {
    title: "WeatherNow Interactive",
    problem: "Existing weather tools are cluttered and slow to load.",
    impact:
      "Developed a blazing-fast, responsive dashboard that performs sub-second data retrieval via OpenWeatherMap API. Built a sleek, intuitive UI in React and modernized styling with pure Tailwind CSS.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wheatherNowIllustration-GO8ikUAUm039fV9Or35wWqYIO6DzQk.png",
    tags: ["React", "OpenWeatherMap API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/ak01abhinav",
  },
  {
    title: "Premium Portfolio",
    problem: "Standard portfolios fail to communicate engineering depth.",
    impact:
      "Designed and engineered a high-performance, SEO-optimized portfolio from scratch. Showcases mastery in modern React patterns (App Router, Server Components) while utilizing advanced CSS techniques for micro-animations and depth.",
    image: "/images/portfolio.jpeg", // Kept original fallback
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "#",
    githubUrl: "https://github.com/ak01abhinav",
  },
];

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 px-4 border-t border-border/40 relative bg-background"
    >
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-6 shadow-[0_0_15px_rgba(var(--primary),0.1)]">
            <FolderGit2 className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-bold tracking-wide uppercase">
              Proof of Work
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
            Selected{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">
              Projects.
            </span>
          </h2>
          <p className="mt-2 text-lg text-muted-foreground/90 max-w-2xl mx-auto font-medium">
            Real-world challenges, robust architectures, and measurable impact.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col bg-card/60 rounded-3xl border border-border/50 hover:border-primary/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-[0_0_30px_rgba(var(--primary),0.15)] backdrop-blur-sm"
            >
              {/* Image Header */}
              <div className="relative h-56 md:h-64 w-full overflow-hidden shrink-0 border-b border-border/50">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-overlay" />
                <Image
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* External Links Hover Overlay */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 translate-y-[-150%] group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-background/90 backdrop-blur-md flex items-center justify-center text-foreground hover:text-primary hover:bg-background transition-all"
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github size={18} />
                  </Link>
                  <Link
                    href={project.liveUrl}
                    className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-all shadow-lg"
                    aria-label={`Visit ${project.title} live`}
                  >
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>

                <div className="mb-6 space-y-3 flex-1">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1 block">
                      Context
                    </span>
                    <p className="text-muted-foreground text-sm font-medium">
                      {project.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-purple-400/80 mb-1 block">
                      Outcome
                    </span>
                    <p className="text-muted-foreground/90 text-sm leading-relaxed">
                      {project.impact}
                    </p>
                  </div>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border/50">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs px-2.5 py-1 font-semibold bg-secondary hover:bg-primary/20 hover:text-primary transition-colors border border-border/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
