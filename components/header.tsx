"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Home, User, Layers, Sparkles, Mail } from "lucide-react";
import { motion } from "framer-motion";

const navItems = [
  { href: "#home", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#skills", label: "Skills", icon: Sparkles },
  { href: "#projects", label: "Projects", icon: Layers },
  { href: "#contact", label: "Contact", icon: Mail },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [constraints, setConstraints] = useState({
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  });
  const [isFlipped, setIsFlipped] = useState(false);

  const radius = 115; // distance of radial items from the centre

  // Compute drag constraints and flip direction based on container position
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        const vMargin = radius + 20;
        const hMargin = 15;
        // Use visualViewport on mobile for accurate height (accounts for browser chrome)
        const viewH = window.visualViewport?.height ?? window.innerHeight;
        const viewW = window.visualViewport?.width ?? window.innerWidth;

        setConstraints({
          left: hMargin - rect.left,
          top: vMargin - rect.top,
          right: viewW - rect.right - hMargin,
          bottom: viewH - rect.bottom - vMargin,
        });

        setIsFlipped(rect.left + rect.width / 2 > viewW / 2);
      }
    };
    update();
    window.addEventListener("resize", update);
    window.visualViewport?.addEventListener("resize", update);
    // Re-compute before every touch so constraints are fresh
    window.addEventListener("touchstart", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.visualViewport?.removeEventListener("resize", update);
      window.removeEventListener("touchstart", update);
    };
  }, []);

  const updateFlippedStatus = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setIsFlipped(rect.left + rect.width / 2 > window.innerWidth / 2);
    }
  };

  return (
    <>
      {/* Background dimmer – stays fixed, not draggable */}
      <div
        className={`fixed inset-0 bg-background/20 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Draggable container */}
      <motion.div
        ref={containerRef}
        drag
        dragConstraints={constraints}
        dragElastic={0}
        onDrag={updateFlippedStatus}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-50 flex items-center justify-center w-16 h-16"
        onMouseEnter={() => {
          updateFlippedStatus();
          if (window.matchMedia("(hover: hover)").matches) setIsOpen(true);
        }}
        onMouseLeave={() => {
          if (window.matchMedia("(hover: hover)").matches) setIsOpen(false);
        }}
      >
        {/* Invisible hover bridge – only on desktop */}
        {isOpen &&
          typeof window !== "undefined" &&
          window.matchMedia("(hover: hover)").matches && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 ${isFlipped ? "right-0" : "left-0"} h-[400px] w-[250px]`}
            />
          )}

        {/* Radial navigation items */}
        {navItems.map((item, index) => {
          const baseAngle = -65 + (130 / (navItems.length - 1)) * index;
          const angle = isFlipped ? 180 - baseAngle : baseAngle;
          const rad = (angle * Math.PI) / 180;
          const x = isOpen ? radius * Math.cos(rad) : 0;
          const y = isOpen ? radius * Math.sin(rad) : 0;
          return (
            <Link
              key={item.label}
              href={item.href}
              className={`absolute flex items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
                isOpen
                  ? "opacity-100 cursor-pointer pointer-events-auto"
                  : "opacity-0 pointer-events-none"
              }`}
              style={{
                transform: `translate(${x}px, ${y}px) scale(${isOpen ? 1 : 0.5})`,
                transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
              }}
              aria-label={item.label}
              onClick={() => setIsOpen(false)}
            >
              <div className="relative group flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-xl border border-border/50 shadow-[0_0_15px_rgba(var(--primary),0.1)] flex items-center justify-center text-muted-foreground group-hover:bg-orange-500/10 group-hover:text-orange-400 group-hover:border-orange-500/50 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]">
                  <item.icon size={20} />
                </div>
                <div
                  className={`absolute ${isFlipped ? "right-[3.5rem]" : "left-[3.5rem]"} opacity-0 ${isFlipped ? "translate-x-2 animate-in slide-in-from-right-2" : "-translate-x-2"} group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap`}
                >
                  <span className="bg-background/95 backdrop-blur-md border border-border/50 px-3 py-1.5 rounded-lg text-sm font-semibold shadow-xl text-foreground inline-block">
                    {item.label}
                  </span>
                </div>
              </div>
            </Link>
          );
        })}

        {/* Pulsing ring behind the main button */}
        <div
          className={`absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-900 to-orange-500/20 blur-[25px] transition-all duration-700 ${
            isOpen
              ? "opacity-0 scale-50"
              : "opacity-80 scale-[1.35] animate-pulse"
          }`}
        />

        {/* Main AK button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
          className={`relative z-10 w-14 h-14 rounded-full border-2 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] flex items-center justify-center backdrop-blur-[0.15rem] ${
            isOpen
              ? "border-orange-500/50 text-orange-400 bg-orange-500/10 shadow-[0_0_30px_rgba(249,115,22,0.35)]"
              : "bg-black/5 border-border/50 text-muted-foreground hover:border-orange-500 hover:bg-orange-500/10 shadow-[0_0_20px_rgba(249,115,22,0.15)]"
          }`}
          aria-label="Navigation Menu"
        >
          <span className="font-bold text-[1.1rem] tracking-[0.15em] lowercase">
            ak
          </span>
        </button>
      </motion.div>
    </>
  );
}
