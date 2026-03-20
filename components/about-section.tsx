import Image from "next/image"
import { MapPin, Code2, Zap, Building2, TerminalSquare } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 bg-secondary/20 border-y border-border/40 relative overflow-hidden">
      {/* Background flare */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">
          
          {/* Visual Side */}
          <div className="relative group mx-auto lg:mx-0 max-w-md w-full">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-indigo-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200" />
            <div className="relative aspect-[4/5] bg-card/80 backdrop-blur-sm rounded-2xl overflow-hidden border border-border/50 shadow-2xl p-2">
              <div className="w-full h-full relative rounded-xl overflow-hidden bg-secondary">
                <Image
                  src="/images/male_working.png"
                  alt="Abhinav Kumar"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-background/90 backdrop-blur-md border border-border/50 rounded-xl p-4 shadow-xl translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Zap className="text-primary w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Fast Learner</p>
                      <p className="text-xs text-muted-foreground">Up-to-date with modern tech</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copy Side */}
          <div className="flex flex-col">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-4 flex items-center gap-2">
              <TerminalSquare className="w-4 h-4" /> The Pitch
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 leading-tight tracking-tight">
              Hungry, adaptable, and <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">ready to build.</span>
            </h2>
            
            <div className="space-y-5 text-muted-foreground leading-relaxed text-lg">
              <p>
                Yes, I’m currently a CSE student. But rather than viewing that as a lack of experience, consider it my greatest asset: 
                <strong className="text-foreground font-medium"> I have no legacy habits.</strong> I am deeply hungry for impact, naturally adaptable, and entirely up-to-date with the modern frontend ecosystem.
              </p>
              <p>
                I don’t just study theory—I build real products. Instead of generic tutorials, I’ve spent the last 6+ months shipping production-ready features for an enterprise HR SaaS platform at Appeneure. 
              </p>
            </div>

            {/* Experience Card inside About */}
            <div className="mt-8 p-6 bg-card rounded-2xl border border-border shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">Software Developer Intern</h3>
                    <p className="text-primary font-medium text-sm mb-1">Appeneure • Jul 2025 - Present</p>
                    <p className="text-sm text-muted-foreground/90 leading-relaxed">
                      Built and deployed complete end-to-end features using <strong>Next.js, TypeScript, and Tailwind</strong>. Collaborated with agile teams via Jira, consumed complex REST APIs (Swagger/FastAPI), and delivered reliable code under client deadlines.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Facts */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border/50 text-sm font-medium">
                <MapPin className="text-primary w-4 h-4" /> Greater Noida, India
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-lg border border-border/50 text-sm font-medium">
                <Code2 className="text-primary w-4 h-4" /> B.Tech CSE (8.36 CGPA)
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}
