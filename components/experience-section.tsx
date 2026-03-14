import { Briefcase, Calendar, MapPin, Building2, Users } from "lucide-react";

const experiences = [
  {
    company: "Appeneure - Stealth Talent Solutions",
    companyDescription:
      "Appeneure is a mobile and web app development company based in Noida, India, founded in 2018. The company builds Android, iOS, web, and AI-powered applications for startups and businesses, providing UI/UX design, cross-platform development, and backend services.",
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
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Remix",
      "REST APIs",
      "Jira",
      "Git",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-24 px-6 relative w-full overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-24 flex flex-col items-center">
          <p className="text-blue-500 font-bold tracking-[0.2em] text-sm uppercase mb-3">
            Career
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 tracking-tight">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto">
            My professional journey in building production-grade applications.
          </p>
        </div>

        <div className="relative">
          {/* Main Continuous Vertical Line */}
          <div className="absolute left-[11px] top-4 bottom-0 w-[1px] bg-gradient-to-b from-blue-900/5 via-blue-700 to-blue-1000/30 md:block hidden" />

          <div className="space-y-24">
            {experiences.map((exp, index) => {
              const [companyName, companySubtitle] = exp.company.split(" - ");
              return (
                <div
                  key={index}
                  className="relative grid md:grid-cols-[280px_1fr] lg:grid-cols-[340px_1fr] gap-12 md:gap-16 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-[6px] top-[14px] w-3 h-3 bg-blue-500 rounded-full ring-[6px] ring-[#0f172a] z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)]" />

                  {/* Left Column - Company Info (Pushed down into middle visually) */}
                  <div className="flex flex-col items-start justify-center space-y-7">
                    <div className="flex gap-4 items-center">
                      <div className="w-14 h-14 rounded-2xl bg-[#0f172a] border border-blue-900/40 flex items-center justify-center shrink-0 shadow-lg">
                        <Building2 className="text-blue-500" size={28} />
                      </div>
                      <div className="pt-1 max-w-[200px]">
                        <h3 className="text-[22px] font-bold text-foreground leading-tight tracking-wide">
                          {companyName}
                        </h3>
                        {companySubtitle && (
                          <p className="text-blue-500 text-[15px] font-medium mt-1.5">
                            {companySubtitle}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4 pt-1">
                      <div className="flex items-center gap-4 text-[15px]">
                        <Calendar
                          size={18}
                          className="text-blue-500 shrink-0"
                        />
                        <span className="text-foreground font-semibold tracking-wide">
                          {exp.period}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-[15px]">
                        <MapPin size={18} className="text-blue-500 shrink-0" />
                        <span className="text-muted-foreground">
                          {exp.location}
                        </span>
                      </div>
                      <div className="flex items-center gap-4 text-[15px]">
                        <Users size={18} className="text-blue-500 shrink-0" />
                        <span className="text-muted-foreground">
                          {exp.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Role Details (Aligned to top) */}
                  <div>
                    <h3 className="text-3xl md:text-[34px] font-bold text-foreground mb-4 tracking-tight">
                      {exp.role}
                    </h3>
                    <p className="text-blue-500 text-[13px] font-bold uppercase tracking-widest mb-8">
                      Key Contributions
                    </p>

                    <ul className="space-y-5 mb-10">
                      {exp.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-4 text-muted-foreground text-[16px] leading-[1.7]"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.6)]" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div>
                      <p className="text-[12px] text-muted-foreground font-bold uppercase tracking-[0.2em] mb-5">
                        Technologies Used
                      </p>
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-4 py-2 text-[13px] font-semibold bg-[#0f172a] text-blue-400 rounded-full border border-blue-900/30 transition-all hover:bg-blue-900/20 hover:border-blue-500/30 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
