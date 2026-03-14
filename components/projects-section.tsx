import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "QuickSummary",
    description:
      "AI-powered summarization tool with Google Gemini API integration and CI/CD pipeline.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/QuickSummary-VOleiJ5bR3nsXZU6G5xraq8DW9u6gh.png",
    tags: ["Next.js", "TypeScript", "Gemini API", "GitHub Actions"],
    liveUrl: "#",
    githubUrl: "https://github.com/ak01abhinav",
  },
  {
    title: "WeatherNow",
    description:
      "Responsive weather dashboard with real-time city search and OpenWeatherMap API.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/wheatherNowIllustration-GO8ikUAUm039fV9Or35wWqYIO6DzQk.png",
    tags: ["Next.js", "OpenWeatherMap API", "Tailwind CSS", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/ak01abhinav",
  },
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio with dark blue theme, resume preview, and contact form.",
    image: "/images/portfolio-preview.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    liveUrl: "#",
    githubUrl: "https://github.com/ak01abhinav",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects showcasing my skills in building
            modern web applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-300 overflow-hidden p-0"
            >
              {/* Project Image - Top */}
              <div className="relative h-40 overflow-hidden rounded-t-[inherit]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 rounded-t-[inherit]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Content - Bottom */}
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Link
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={16} />
                    </Link>
                    <Link
                      href={project.liveUrl}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} live`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technology Pills - Very Bottom */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-border">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary"
                      className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
