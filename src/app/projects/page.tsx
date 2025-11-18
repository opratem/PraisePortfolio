"use client";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { Metadata } from "next";

const projects = [
  {
    title: "WasteLess App - Climate Action Food Waste Reducer",
    description: "A comprehensive web application designed to combat climate change by reducing household food waste. Features smart inventory management, AI-powered expiration tracking, intelligent recipe suggestions using near-expiry ingredients, and an impact dashboard showing CO₂ emissions saved and financial savings. Helps users reduce waste by 30% and save ₦10,000 monthly.",
    link: "https://github.com/Favoritetechgirl/WastelessApp-BE",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot", title: "Spring Boot" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", title: "Java" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", alt: "PostgreSQL", title: "PostgreSQL" },
    ],
  },
  {
    title: "CV Builder - Professional Resume Builder",
    description: "A modern, feature-rich CV/Resume builder with ATS optimization, multiple professional templates, job description analyzer, and real-time preview. Features drag & drop section reordering, auto-save, version management, and export to PDF/DOCX formats.",
    link: "https://cvbuildercv.vercel.app/",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", title: "TypeScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS", title: "Tailwind CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", alt: "Supabase", title: "Supabase" },
    ],
  },
  {
    title: "The Prevailing Word Belivers Ministry Website",
    description: "A comprehensive full-stack church management website with member portal, admin dashboard, online donations, media management, and authentication system. Features 46+ pages, 38 API endpoints, and integrations with Cloudinary, YouTube, and Paystack.",
    link: "https://tpwbm.vercel.app",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "Next.js", title: "Next.js" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript", title: "TypeScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", alt: "Tailwind CSS", title: "Tailwind CSS" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", alt: "PostgreSQL", title: "PostgreSQL" },
    ],
  },
  {
    title: "School Employee Management System",
    description: "A web-based CRUD application designed to help schools manage employee records and leave requests efficiently.",
    link: "https://github.com/opratem/schoolems",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg", alt: "Spring Boot", title: "Spring Boot" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "React", title: "React" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript", title: "JavaScript" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", title: "Java" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", alt: "PostgreSQL", title: "PostgreSQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", alt: "Maven", title: "Maven" },
    ],
  },
  {
    title: "Personal Portfolio",
    description: "Designed a Personal Portfolio for myself showing my skills and Projects",
    link: "https://github.com/opratem/PersonalPortfolio",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", title: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", title: "CSS3" },
    ],
  },
  {
    title: "Employee Management System",
    description: "A backend system for managing employees work durations(check in and check out), built using Java, PostgreSQL, and Maven.",
    link: "https://bitbucket.org/opratem/employeemanagementsystem/src/master/",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", title: "Java" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", alt: "PostgreSQL", title: "PostgreSQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", alt: "Maven", title: "Maven" },
    ],
  },
  {
    title: "Employee Attendance Tracker",
    description: "This is a Java-based application that allows you to track employee attendance by recording check-in and check-out times. It calculates the total hours worked by each employee and provides a summary of their attendance records.",
    link: "https://github.com/opratem/EmployeeAttendanceTracker",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", title: "Java" },
    ],
  },
  {
    title: "CV Template",
    description: "A CV Template Project",
    link: "https://github.com/opratem/CVBuilderTemplate",
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", title: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", title: "CSS3" },
    ],
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useScrollReveal({ delay: index * 100, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className="scroll-reveal project-card flex flex-col h-full p-4 md:p-7 rounded-2xl transition-all duration-300 cursor-default border border-transparent hover:border-[var(--accent-glow)]"
      style={{
        background: 'var(--bg-secondary)',
        boxShadow: 'var(--card-shadow)',
      }}
      tabIndex={0}
    >
      <div className="flex gap-3 mb-4 justify-center flex-wrap" aria-label={`Technologies used: ${project.icons.map(i => i.alt).join(', ')}`}>
        {project.icons.map((icon) => (
          <img
            key={icon.alt}
            src={icon.src}
            alt={icon.alt}
            title={icon.title}
            className="w-8 h-8 transition-transform duration-[220ms] hover:scale-115"
            style={{ filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.13))' }}
          />
        ))}
      </div>

      <h3 className="text-base md:text-lg font-bold mb-2.5" style={{ color: 'var(--accent-light)' }}>
        {project.title}
      </h3>

      <p className="flex-grow text-sm md:text-base leading-[1.55] mb-5 text-left" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="self-center font-semibold px-5 py-2 rounded-lg no-underline transition-all duration-200"
        style={{
          background: 'var(--accent)',
          color: 'white',
          boxShadow: '0 4px 16px rgba(250, 136, 27, 0.15)',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = 'var(--accent-light)';
          e.currentTarget.style.color = 'var(--bg-secondary)';
          e.currentTarget.style.transform = 'translateY(-1px) scale(1.08)';
          e.currentTarget.style.boxShadow = '0 6px 20px rgba(254, 223, 161, 0.25)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--accent)';
          e.currentTarget.style.color = 'white';
          e.currentTarget.style.transform = 'none';
          e.currentTarget.style.boxShadow = '0 4px 16px rgba(250, 136, 27, 0.15)';
        }}
      >
        View Project
      </a>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="text-center px-4 pt-32 pb-16 transition-all duration-300" style={{ background: 'var(--bg-primary)' }}>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-[0.05em]" style={{ color: 'var(--accent-light)' }}>
        Projects
      </h2>

      <div className="grid gap-6 md:gap-8 px-2 md:px-8 max-w-[1400px] mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
        {projects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </main>
  );
}
