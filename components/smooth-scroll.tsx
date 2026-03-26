"use client"

import { useEffect, useRef } from "react"
// @ts-expect-error - lenis types may not be fully resolved in some environments
import Lenis from "lenis"
import { usePathname } from "next/navigation"

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function for buttery smooth feel
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      syncTouch: false,
      touchMultiplier: 2,
      // Don't intercept scroll when the pointer is inside a natively scrollable element
      prevent: (node: Element) => {
        return (
          node.tagName === "TEXTAREA" ||
          (node.scrollHeight > node.clientHeight &&
            getComputedStyle(node).overflowY !== "visible" &&
            getComputedStyle(node).overflowY !== "hidden")
        )
      },
    })
    
    lenisRef.current = lenis

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    // Global click listener for anchor links to force smooth scrolling
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a")
      if (target && target.hash) {
        // Only prevent default and scroll if it links to an ID on the current page
        const isSamePage = target.origin === window.location.origin && target.pathname === window.location.pathname
        
        if (isSamePage) {
          e.preventDefault()
          lenis.scrollTo(target.hash, { offset: 0, duration: 1.5 })
        }
      }
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
