"use client";

import Link from "next/link";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Download } from "lucide-react";

export default function Home() {
  const skillsRef = useScrollReveal();
  const aboutRef = useScrollReveal();

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
            Certified Computer Engineer with expertise in building secure, scalable backend systems and full-stack applications. Currently Coding Mentor at Learn2earn and Robotics Engineer at Tech Talent Academy.
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
      <section className="py-10 md:py-20 px-4 transition-all duration-300" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div ref={skillsRef} className="scroll-reveal text-center mb-8 md:mb-16">
            <span className="inline-block text-[0.85rem] font-semibold tracking-[2px] uppercase mb-2" style={{ color: 'var(--accent)' }}>
              MY TOOLBOX
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Technologies & Tools
            </h2>
            <p className="text-base md:text-lg max-w-[600px] mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Explore the technologies and tools I use to craft exceptional digital experiences
            </p>
          </div>

          <div ref={skillsRef} className="scroll-reveal grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-4">
            {[
              {
                title: "Languages",
                skills: ["Java", "Python", "JavaScript", "TypeScript", "Golang", "HTML", "CSS"],
              },
              {
                title: "Frameworks & Libraries",
                skills: ["Spring Boot", "React", "Next.js", "Django", "Express", "Tailwind CSS"],
              },
              {
                title: "Databases & Tools",
                skills: ["PostgreSQL", "NeonDB", "Supabase", "Docker", "Git", "Linux"],
              },
              {
                title: "Specializations",
                skills: ["RESTful APIs", "Full-Stack Development", "Robotics Engineering", "Arduino & ESP32", "Problem Solving"],
              },
            ].map((category) => (
              <div
                key={category.title}
                className="p-6 md:p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--bg-secondary)',
                  boxShadow: 'var(--card-shadow)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 30px rgba(250, 136, 27, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                }}
              >
                <h3
                  className="text-xl font-semibold mb-4 pb-3"
                  style={{
                    color: 'var(--accent-light)',
                    borderBottom: '2px solid var(--bg-tertiary)',
                  }}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-4 py-2 rounded-lg text-[0.9rem] font-medium transition-all duration-200 border border-transparent"
                      style={{
                        background: 'var(--bg-tertiary)',
                        color: 'var(--text-secondary)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent)';
                        e.currentTarget.style.color = '#fff';
                        e.currentTarget.style.borderColor = 'var(--accent-hover)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(250, 136, 27, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--bg-tertiary)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'transparent';
                        e.currentTarget.style.transform = 'none';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-8 md:py-12 transition-all duration-300" style={{ background: 'linear-gradient(180deg, var(--bg-tertiary) 70%, var(--bg-secondary) 100%)' }}>
        <div
          ref={aboutRef}
          className="scroll-reveal max-w-[870px] mx-auto p-6 md:p-8 rounded-2xl text-center transition-all duration-300"
          style={{
            background: 'var(--bg-secondary)',
            boxShadow: '0 6px 28px rgba(18,25,44,0.18)',
          }}
        >
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: 'var(--accent-light)' }}>
            About Me
          </h2>
          <p className="text-base md:text-lg leading-relaxed tracking-[0.01rem]" style={{ color: 'var(--text-secondary)' }}>
            I am a Certified Computer Engineer and Backend Developer with expertise in Java, Spring Boot, SQL, and Web Technologies. I specialize in designing and developing secure, scalable backend systems and RESTful APIs. With a strong foundation in computer programming, networking, and software development, I also bring frontend experience using React, HTML, CSS, and JavaScript to build responsive, user-friendly web interfaces.
          </p>
          <p className="text-base md:text-lg leading-relaxed tracking-[0.01rem] mt-4" style={{ color: 'var(--text-secondary)' }}>
            Currently serving as a Coding Mentor at Learn2earn (Piscine Program) and Robotics Engineer/Instructor at Tech Talent Academy, I'm passionate about creating clean, maintainable code and contributing to impactful software solutions through collaboration, problem-solving, and continuous learning.
          </p>
        </div>
      </section>
    </main>
  );
}
