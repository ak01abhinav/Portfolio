import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import { ResumeDialog } from "@/components/resume-dialog"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/15 via-background to-background" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Profile Image */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 bg-primary/30 rounded-full blur-xl" />
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile_image-qUVPweMQnRLpNQU9RSmHMgCEwpsa2u.jpeg"
            alt="Abhinav Kumar - Developer illustration"
            width={128}
            height={128}
            className="relative rounded-full object-cover border-2 border-primary/50"
            priority
          />
        </div>

        <p className="text-primary text-sm font-medium tracking-widest uppercase mb-4">
          Frontend Developer
        </p>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
          Hi, I&apos;m Abhinav Kumar
        </h1>
        
        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty">
          Frontend Developer with 6+ months of internship experience shipping production features 
          for enterprise SaaS products. Proficient in Next.js, TypeScript, React, and Tailwind CSS.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="px-8">
            <Link href="#projects">View My Work</Link>
          </Button>
          <ResumeDialog />
          <Button asChild variant="outline" size="lg" className="px-8">
            <Link href="#contact">Contact Me</Link>
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-6">
          <Link
            href="https://github.com/ak01abhinav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={22} />
          </Link>
          <Link
            href="https://linkedin.com/in/ak01abhinav"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </Link>
          <Link
            href="mailto:abhinav01.ak@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={22} />
          </Link>
        </div>
      </div>
    </section>
  )
}
