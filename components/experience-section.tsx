import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, MapPin, Building2, Users } from "lucide-react"

const experiences = [
  {
    company: "Appeneure - Stealth Talent Solutions",
    companyDescription: "Appeneure is a mobile and web app development company based in Noida, India, founded in 2018. The company builds Android, iOS, web, and AI-powered applications for startups and businesses, providing UI/UX design, cross-platform development, and backend services.",
    role: "Software Developer Intern",
    type: "HR SaaS Product",
    location: "Greater Noida, UP",
    period: "Jul. 2025 - Present",
    highlights: [
      "Shipped production-ready features end-to-end using Next.js, TypeScript, Tailwind CSS, and shadcn/ui for an enterprise HR SaaS platform used by real clients.",
      "Built and connected frontend UI components to backend REST endpoints, enabling candidate management and job workflow features across the product.",
      "Developed early-stage features in Remix - file-based routing, server-side data loading, and form handling - as part of initial product architecture.",
      "Integrated REST APIs by reading Swagger/OpenAPI and FastAPI documentation directly, understanding request/response contracts without relying on pre-written client code.",
      "Used Jira for day-to-day task management - picking up sprint tickets, tracking progress, and moving work through review cycles with the client team.",
      "Collaborated through Git branching, code reviews, and pull requests; identified and fixed performance bottlenecks and usability issues across multiple sprints.",
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Remix", "REST APIs", "Jira", "Git"],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
            Career
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Work Experience
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            My professional journey in building production-grade applications.
          </p>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="grid lg:grid-cols-5 gap-8">
              {/* Left Side - Company Info */}
              <div className="lg:col-span-2 space-y-4">
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.company.split(" - ")[0]}</h3>
                      <p className="text-sm text-primary">{exp.company.split(" - ")[1]}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {exp.companyDescription}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar size={14} className="text-primary" />
                      <span className="text-foreground font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin size={14} className="text-primary" />
                      <span className="text-muted-foreground">{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users size={14} className="text-primary" />
                      <span className="text-muted-foreground">{exp.type}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Role & Highlights */}
              <div className="lg:col-span-3">
                <div className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors h-full">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-primary">Key Contributions</p>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">Technologies Used</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
