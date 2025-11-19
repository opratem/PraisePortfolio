"use client";

import type { Metadata } from "next";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { PageTransition } from "@/components/page-transition";

const contactLinks = [
  {
    href: "mailto:praise.olufemi99@gmail.com",
    label: "Email",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg",
    ariaLabel: "Email",
  },
  {
    href: "https://www.linkedin.com/in/praise-olufemi-4a5334177/",
    label: "LinkedIn",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg",
    ariaLabel: "LinkedIn",
  },
  {
    href: "https://github.com/opratem",
    label: "GitHub",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    ariaLabel: "GitHub",
  },
  {
    href: "https://bitbucket.org/opratem",
    label: "Bitbucket",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bitbucket/bitbucket-original.svg",
    ariaLabel: "Bitbucket",
  },
];

export default function ContactPage() {
  const sectionRef = useScrollReveal({ threshold: 0.2 });

  return (
    <PageTransition>
    <main
      className="min-h-screen flex flex-col justify-center items-center px-4 transition-all duration-300"
      style={{
        background: "var(--bg-primary)",
        paddingTop: "calc(var(--header-height) + 30px)",
        paddingBottom: "40px",
      }}
    >
      <section
        ref={sectionRef}
        className="scroll-reveal-scale w-full max-w-[480px] rounded-[24px] text-center mx-auto flex flex-col items-center transition-all duration-300 px-6 py-10 md:px-9 md:py-11 border border-transparent hover:border-[var(--accent-glow)]"
        style={{
          background: "var(--bg-secondary)",
          boxShadow: "var(--card-shadow)",
        }}
      >
        <h1
          className="text-2xl md:text-4xl font-bold tracking-[1px] mb-2"
          style={{ color: "var(--accent-light)" }}
        >
          Let&apos;s Connect
        </h1>

        <p
          className="text-base md:text-lg mb-10 tracking-[0.01rem]"
          style={{ color: "var(--text-secondary)" }}
        >
          Have a project in mind or just want to chat about tech? I&apos;d love to hear from you!
        </p>

        <div className="flex flex-wrap justify-center gap-5 md:gap-9">
          {contactLinks.map((link, index) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-icon-btn stagger-item relative group"
              aria-label={link.ariaLabel}
              tabIndex={0}
              style={{
                animationDelay: `${0.3 + index * 0.15}s`,
              }}
            >
              <span className="contact-tooltip">
                {link.label}
              </span>

              <img
                src={link.icon}
                alt={`${link.label} icon`}
                className="icon-img"
              />
            </a>
          ))}
        </div>
      </section>
    </main>
    </PageTransition>
  );
}
