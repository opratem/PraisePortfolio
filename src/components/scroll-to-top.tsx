"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[1000] w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
      }`}
      style={{
        background: "var(--accent)",
        boxShadow: "0 4px 20px var(--accent-glow)",
      }}
      aria-label="Scroll to top"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1) translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 8px 30px var(--accent-glow)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px var(--accent-glow)";
      }}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  );
}
