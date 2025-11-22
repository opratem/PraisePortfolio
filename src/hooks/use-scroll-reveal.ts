"use client";

import { useEffect, useRef } from "react";

export interface ScrollRevealOptions {
  threshold?: number;
  delay?: number;
  rootMargin?: string;
}

export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(
  options: ScrollRevealOptions = {}
) {
  const { threshold = 0.1, delay = 0, rootMargin = "0px" } = options;
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (delay > 0) {
              setTimeout(() => {
                entry.target.classList.add("visible");
              }, delay);
            } else {
              entry.target.classList.add("visible");
            }
          }
        });
      },
      { threshold, rootMargin }
    );

    const element = ref.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, delay, rootMargin]);

  return ref;
}
