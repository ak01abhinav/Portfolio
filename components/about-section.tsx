import Image from "next/image"
import { GraduationCap, MapPin, Code2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <div className="relative aspect-square max-w-md mx-auto md:mx-0">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl transform rotate-3" />
            <div className="relative bg-secondary rounded-2xl h-full w-full overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_image-qUVPweMQnRLpNQU9RSmHMgCEwpsa2u.jpeg"
                alt="Abhinav Kumar - Developer illustration"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
              About Me
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Building modern web experiences
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m a Frontend Developer passionate about crafting accessible, pixel-perfect user interfaces 
                that blend thoughtful design with robust engineering. Currently in my final year of B.Tech CSE 
                with a CGPA of 8.36 at ITS Engineering College, AKTU University.
              </p>
              <p>
                With 6+ months of internship experience at Appeneure, I&apos;ve shipped production-ready features 
                for an enterprise HR SaaS platform. I&apos;m comfortable working with REST APIs, reading 
                Swagger/OpenAPI documentation, and collaborating in agile teams via Git workflows.
              </p>
              <p>
                I specialize in Next.js, TypeScript, React, Tailwind CSS, and shadcn/ui. I also have experience 
                with Remix for file-based routing and server-side data loading.
              </p>
            </div>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="text-primary" size={18} />
                <span>Greater Noida, Uttar Pradesh, India</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="text-primary" size={18} />
                <span>B.Tech CSE - ITS Engineering College (2022-2026)</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Code2 className="text-primary" size={18} />
                <span>Open to Full-time Opportunities</span>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground">Months Experience</div>
              </div>
              <div className="p-4 rounded-xl bg-secondary/50 border border-border">
                <div className="text-3xl font-bold text-primary">8.36</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
