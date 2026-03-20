import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20 pb-16">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[28rem] h-[28rem] bg-indigo-500/20 rounded-full mix-blend-screen filter blur-[128px] animate-pulse [animation-delay:2s]" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay" />
      
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col items-center text-center">
          
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(var(--primary),0.2)]">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-primary text-sm font-semibold tracking-wide uppercase">Software Engineer • Available for Hire</span>
          </div>

          <p className="text-muted-foreground font-semibold tracking-widest uppercase mb-4 text-xs md:text-sm">
            Hi, I'm Abhinav Kumar
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground/90 to-muted-foreground/50 leading-[1.1] tracking-tighter text-balance mb-8">
            Engineering the web,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-indigo-400 to-purple-400">
              pixel by pixel.
            </span>
          </h1>
          
          {/* Subheadline - highly confident */}
          <p className="text-lg md:text-xl text-muted-foreground/90 max-w-2xl mx-auto leading-relaxed text-pretty font-medium mb-10">
            I don't just write code—I build <strong className="text-foreground transition-all">high-performance, production-grade products</strong>. With a deep focus on Next.js and TypeScript, I deliver enterprise-ready solutions that users love and businesses trust.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold shadow-[0_0_30px_-5px_var(--primary)] hover:shadow-[0_0_40px_-5px_var(--primary)] transition-all duration-300 rounded-xl group relative overflow-hidden bg-primary text-primary-foreground border-none">
              <Link href="#projects">
                <span className="relative z-10 flex items-center gap-2">
                  View Selected Work
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent z-0" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto h-14 px-8 text-base font-semibold rounded-xl border-border/50 bg-background/50 hover:bg-secondary/50 backdrop-blur-md transition-all duration-300">
              <Link href="#contact">Contact Me</Link>
            </Button>
          </div>

          {/* Minimal Social Links */}
          <div className="mt-16 flex items-center justify-center gap-8 border-t border-border/40 pt-8 w-full max-w-xs md:max-w-md">
            {[ 
              { icon: Github, href: "https://github.com/ak01abhinav", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/ak01abhinav", label: "LinkedIn" },
              { icon: Mail, href: "mailto:abhinav01.ak@gmail.com", label: "Email" }
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-full bg-secondary/30 border border-border/30 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
