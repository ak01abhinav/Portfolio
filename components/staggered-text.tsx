"use client";

import { useEffect, useRef, useState } from "react";

interface StaggeredTextProps {
  text: string;
  initialDelay?: number;
  charGap?: number;
  className?: string;
  charIndexOffset?: number;
  triggerOnScroll?: boolean; // If true, animates when scrolled into view instead of on mount
}

export function StaggeredText({
  text,
  initialDelay = 200,
  charGap = 30,
  className = "",
  charIndexOffset = 0,
  triggerOnScroll = false,
}: StaggeredTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  // const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    // if (hasTriggered) return;

    const reveal = () => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          ref.current?.querySelectorAll(".char-reveal").forEach((el) => {
            el.classList.add("visible");
          });
        });
      });
      // setHasTriggered(true);
    };

    if (!triggerOnScroll) {
      reveal();
      return;
    }

    // Intersection Observer — trigger when element enters viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [triggerOnScroll]);

  const words = text.split(" ");
  let charIndex = charIndexOffset;

  return (
    <span ref={ref} className={className}>
      {words.map((word, wi) => (
        <span key={wi} style={{ display: "inline-flex" }}>
          {word.split("").map((char) => {
            const delay = initialDelay + charIndex * charGap;
            charIndex++;
            return (
              <span
                key={`${wi}-${charIndex}`}
                className="char-reveal"
                style={{ transitionDelay: `${delay}ms` }}
              >
                {char}
              </span>
            );
          })}
          {wi < words.length - 1 && <span>&nbsp;</span>}
          {(wi < words.length - 1 && void charIndex++) || null}
        </span>
      ))}
    </span>
  );
}
