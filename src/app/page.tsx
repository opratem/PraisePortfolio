"use client";

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
      <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-24 pb-12 px-4 box-border transition-all duration-300" style={{ background: 'var(--bg-tertiary)' }}>
        {/* Background Image */}
        <div
          className="absolute top-0 left-0 w-full h-full object-cover z-0 min-w-full min-h-full transition-all duration-300"
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            filter: 'blur(2px) brightness(0.6)',
          }}
        />

        {/* Background Overlay */}
        <div
          className="absolute inset-0 w-full h-full z-[1] pointer-events-none transition-all duration-300"
          style={{
            background: 'linear-gradient(120deg, rgba(21,28,46, .92) 55%, rgba(15,18,38, .98) 90%)',
          }}
        />

        {/* Hero Content */}
        <div
          className="relative z-[2] flex flex-col items-center justify-center mt-0 text-center w-full max-w-[1200px] px-4 md:px-8 py-12 md:py-16 rounded-[20px] border"
          style={{
            background: 'rgba(17, 19, 28, 0.4)',
            backdropFilter: 'blur(10px)',
            borderColor: 'rgba(255, 255, 255, 0.05)',
            animation: 'fadeInUp 1.5s cubic-bezier(0.19, 1, 0.22, 1) 0.3s both',
          }}
        >
          {/* Availability Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-[20px] text-[0.9rem] font-medium mb-6"
            style={{
              background: 'rgba(34, 197, 94, 0.1)',
              border: '1px solid rgba(34, 197, 94, 0.3)',
              color: '#22c55e',
              animation: 'fadeInUp 1.5s 0.2s both',
            }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: '#22c55e',
                animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              }}
            ></span>
            Available for new projects
          </div>

          <h1
            className="text-3xl md:text-5xl font-bold tracking-[1.5px] mb-4 md:mb-6"
            style={{
              color: 'var(--text-primary)',
              textShadow: '0 2px 12px rgba(0, 0, 0, 0.6), 0 4px 24px rgba(0, 0, 0, 0.4)',
            }}
          >
            Praise Temiloluwa Olufemi
          </h1>

          <h2
            className="text-lg md:text-2xl font-medium mb-6 md:mb-8 tracking-[0.07rem]"
            style={{
              color: 'var(--text-secondary)',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)',
            }}
          >
            Computer Engineer | Backend Developer
          </h2>

          <p
            className="text-base md:text-lg max-w-[700px] leading-relaxed mb-6 md:mb-8"
            style={{
              color: 'var(--text-secondary)',
              animation: 'fadeInUp 1.5s 0.4s both',
              textShadow: '0 2px 8px rgba(0, 0, 0, 0.5), 0 4px 16px rgba(0, 0, 0, 0.3)',
            }}
          >
            I build robust, scalable backend systems that power real-world applications. As a Coding Mentor at Learn2earn and Robotics Engineer at Tech Talent Academy, I&apos;m passionate about crafting elegant solutions and empowering others through technology.
          </p>

          {/* Tech Icons */}
          <div className="flex gap-4 md:gap-8 mb-6 md:mb-8 flex-wrap items-center justify-center">
            {techIcons.map((icon, index) => (
              <img
                key={icon.alt}
                src={icon.src}
                alt={icon.alt}
                title={icon.title}
                className="w-8 h-8 md:w-12 md:h-12 object-contain opacity-90 transition-all duration-[180ms] hover:scale-110 hover:opacity-100"
                style={{
                  filter: 'drop-shadow(0 2px 12px rgba(28,32,50,.12))',
                  animation: `iconPop 1.1s cubic-bezier(.42,2,.5,1.01) ${0.2 + index * 0.07}s forwards`,
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
          <div className="flex gap-4 flex-wrap justify-center items-center">
            <Link
              href="/projects"
              className="ripple mt-0.5 text-base md:text-lg font-bold border-none rounded-lg px-6 md:px-9 py-3 md:py-3.5 tracking-[0.05em] no-underline transition-all duration-[180ms] inline-block relative"
              style={{
                background: 'var(--accent)',
                color: '#fff',
                boxShadow: '0 3px 20px rgba(250,136,27,.11)',
                animation: 'fadeInUp 1.5s 0.48s both',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent-hover)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 30px 0 rgba(250,136,27,.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 3px 20px rgba(250,136,27,.11)';
              }}
            >
              Explore My Work
            </Link>

            <a
              href="https://drive.google.com/file/d/1V6WJVc7FphFKRWMn2FY5EqC1OgFPZIXc/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="ripple mt-0.5 text-base md:text-lg font-bold rounded-lg px-6 md:px-9 py-3 md:py-3.5 tracking-[0.05em] no-underline transition-all duration-[180ms] inline-flex items-center justify-center gap-2"
              style={{
                background: 'transparent',
                color: 'var(--text-primary)',
                border: '2px solid var(--accent)',
                boxShadow: '0 3px 20px rgba(250,136,27,.11)',
                animation: 'fadeInUp 1.5s 0.48s both',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--accent)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'var(--accent-hover)';
                e.currentTarget.style.transform = 'translateY(-2px) scale(1.03)';
                e.currentTarget.style.boxShadow = '0 8px 30px 0 rgba(250,136,27,.22)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--text-primary)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 3px 20px rgba(250,136,27,.11)';
              }}
            >
              <Download className="w-[18px] h-[18px]" />
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
