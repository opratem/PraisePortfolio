"use client";

import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {

  const techIcons = [
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", alt: "Python", title: "Python" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", title: "Java" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", title: "HTML5" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", title: "CSS3" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", alt: "Django", title: "Django" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", title: "JavaScript" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot", title: "Spring Boot" },
    { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", alt: "PostgreSQL", title: "PostgreSQL" },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        {/* Background Image */}
        <div className="hero-bg-img" />

        {/* Background Overlay */}
        <div className="hero-bg-overlay" />

        {/* Hero Content */}
        <div className="hero-content">
          {/* Available Badge */}
          <div className="availability-badge">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm md:text-base font-semibold tracking-wide">Available for new projects</span>
          </div>

          <h1 className="hero-title">
            Praise Temiloluwa Olufemi
          </h1>

          <h2 className="hero-subtitle">
            Computer Engineer | Backend Developer
          </h2>

          <p className="hero-description">
            I build robust, scalable backend systems that power real-world applications. As a Coding Mentor at Learn2earn and Robotics Engineer at Tech Talent Academy, I&apos;m passionate about crafting elegant solutions and empowering others through technology.
          </p>

          {/* Tech Icons */}
          <div className="hero-tech-icons">
            {techIcons.map((icon, index) => (
              <Image
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                title={icon.title}
                width={48}
                height={48}
                className="w-8 h-8 md:w-12 md:h-12 object-contain opacity-90 transition-all duration-[180ms] hover:scale-110 hover:opacity-100"
                style={{
                  filter: 'drop-shadow(0 2px 12px rgba(28,32,50,.12))',
                  ...(icon.alt === "PostgreSQL" && {
                    background: '#fff',
                    borderRadius: '50%',
                    padding: '4px',
                  }),
                }}
              />
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 md:gap-6 flex-wrap justify-center items-center">
            <Link
              href="/projects"
              className="ripple text-sm md:text-base font-bold border-none rounded-xl px-6 md:px-8 py-2.5 md:py-3 tracking-[0.05em] no-underline transition-all duration-200 inline-block relative shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                color: '#fff',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                animation: 'fadeInUp 1.5s 0.48s both',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.4)';
              }}
            >
              Explore My Work
            </Link>

            <Link
              href="/about"
              className="ripple text-sm md:text-base font-bold border-none rounded-xl px-6 md:px-8 py-2.5 md:py-3 tracking-[0.05em] no-underline transition-all duration-200 inline-block relative shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                color: '#fff',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                animation: 'fadeInUp 1.5s 0.52s both',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.4)';
              }}
            >
              Learn More About Me
            </Link>

            <a
              href="/resume.pdf"
              download="Praise_Olufemi_Resume.pdf"
              className="ripple text-sm md:text-base font-bold border-none rounded-xl px-6 md:px-8 py-2.5 md:py-3 tracking-[0.05em] no-underline transition-all duration-200 inline-flex items-center justify-center gap-2 relative shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)',
                color: '#fff',
                boxShadow: '0 4px 15px rgba(245, 158, 11, 0.4)',
                animation: 'fadeInUp 1.5s 0.56s both',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 8px 25px rgba(245, 158, 11, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'linear-gradient(135deg, #f59e0b 0%, #f97316 100%)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(245, 158, 11, 0.4)';
              }}
            >
              <Download className="w-5 h-5" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <SkillsSection />
    </main>
  );
}
