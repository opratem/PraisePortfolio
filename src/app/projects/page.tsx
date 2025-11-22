"use client";

import { useState, useMemo } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { PageTransition } from "@/components/page-transition";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Github, Globe } from "lucide-react";

type ProjectType = "Full-stack" | "Backend" | "Frontend" | "Mobile";

interface Project {
  title: string;
  description: string;
  longDescription?: string;
  link: string;
  githubLink?: string;
  type: ProjectType;
  techStack: string[];
  icons: Array<{ src: string; alt: string; title: string }>;
  features?: string[];
  images?: string[];
}

const projects: Project[] = [
  {
    title: "WasteLess App - Climate Action Food Waste Reducer",
    description: "A comprehensive web application designed to combat climate change by reducing household food waste. Features smart inventory management, AI-powered expiration tracking, intelligent recipe suggestions using near-expiry ingredients, and an impact dashboard showing CO₂ emissions saved and financial savings. Helps users reduce waste by 30% and save ₦10,000 monthly.",
    longDescription: "WasteLess App is a comprehensive climate action solution that tackles the global food waste crisis through innovative technology. The application combines smart inventory management with AI-powered expiration tracking to help households reduce waste significantly.",
    link: "https://github.com/Favoritetechgirl/WastelessApp-BE",
    githubLink: "https://github.com/Favoritetechgirl/WastelessApp-BE",
    type: "Full-stack",
    techStack: ["Spring Boot", "Java", "React", "PostgreSQL"],
    features: [
      "Smart inventory management system",
      "AI-powered expiration date tracking",
      "Intelligent recipe suggestions using near-expiry ingredients",
      "Impact dashboard showing CO₂ emissions saved",
      "Financial savings calculator",
      "Reduce waste by 30% on average",
      "Save ₦10,000 monthly per household"
    ],
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
    longDescription: "CV Builder is a comprehensive resume creation platform designed to help job seekers create professional, ATS-optimized resumes. With multiple templates, real-time preview, and intelligent job description analysis, it streamlines the resume creation process.",
    link: "https://cvbuildercv.vercel.app/",
    githubLink: "https://cvbuildercv.vercel.app/",
    type: "Full-stack",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
    features: [
      "ATS optimization for better job application success",
      "Multiple professional templates to choose from",
      "Job description analyzer for keyword optimization",
      "Real-time preview as you build",
      "Drag & drop section reordering",
      "Auto-save functionality",
      "Version management system",
      "Export to PDF and DOCX formats"
    ],
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
    longDescription: "A robust church management platform that handles everything from member management to online donations. Built with modern technologies and featuring extensive integrations for a complete digital church experience.",
    link: "https://tpwbm.vercel.app",
    githubLink: "https://tpwbm.vercel.app",
    type: "Full-stack",
    techStack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "PostgreSQL"],
    features: [
      "Member portal with authentication",
      "Admin dashboard for church management",
      "Online donations via Paystack integration",
      "Media management with Cloudinary",
      "YouTube integration for sermons",
      "46+ pages of comprehensive features",
      "38 API endpoints for robust functionality",
      "Event management system",
      "Newsletter management"
    ],
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
    longDescription: "An enterprise-grade employee management system tailored for educational institutions. Streamlines HR operations with intuitive interfaces for managing employee data and leave requests.",
    link: "https://github.com/opratem/schoolems",
    githubLink: "https://github.com/opratem/schoolems",
    type: "Full-stack",
    techStack: ["Spring Boot", "React", "JavaScript", "Java", "PostgreSQL", "Maven"],
    features: [
      "Employee record management (CRUD operations)",
      "Leave request system",
      "Employee profile management",
      "Department organization",
      "Search and filter capabilities",
      "RESTful API architecture"
    ],
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
    longDescription: "A clean and modern personal portfolio website showcasing skills, projects, and professional experience. Built with vanilla HTML and CSS for optimal performance.",
    link: "https://github.com/opratem/PersonalPortfolio",
    githubLink: "https://github.com/opratem/PersonalPortfolio",
    type: "Frontend",
    techStack: ["HTML5", "CSS3"],
    features: [
      "Responsive design for all devices",
      "Skills showcase section",
      "Projects gallery",
      "Contact form",
      "Smooth scrolling animations",
      "Clean and modern UI"
    ],
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", title: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", title: "CSS3" },
    ],
  },
  {
    title: "Employee Management System",
    description: "A backend system for managing employees work durations(check in and check out), built using Java, PostgreSQL, and Maven.",
    longDescription: "A robust backend system focused on tracking employee work hours through check-in/check-out functionality. Designed for scalability and reliability.",
    link: "https://bitbucket.org/opratem/employeemanagementsystem/src/master/",
    githubLink: "https://bitbucket.org/opratem/employeemanagementsystem/src/master/",
    type: "Backend",
    techStack: ["Java", "PostgreSQL", "Maven"],
    features: [
      "Employee check-in/check-out tracking",
      "Work duration calculation",
      "Database-driven architecture",
      "RESTful API endpoints",
      "Scalable backend design"
    ],
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", title: "Java" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg", alt: "PostgreSQL", title: "PostgreSQL" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maven/maven-original.svg", alt: "Maven", title: "Maven" },
    ],
  },
  {
    title: "Employee Attendance Tracker",
    description: "This is a Java-based application that allows you to track employee attendance by recording check-in and check-out times. It calculates the total hours worked by each employee and provides a summary of their attendance records.",
    longDescription: "A comprehensive attendance tracking solution for businesses. Automatically calculates work hours and generates detailed attendance reports for payroll and HR purposes.",
    link: "https://github.com/opratem/EmployeeAttendanceTracker",
    githubLink: "https://github.com/opratem/EmployeeAttendanceTracker",
    type: "Backend",
    techStack: ["Java"],
    features: [
      "Check-in/check-out time recording",
      "Automatic work hours calculation",
      "Attendance summary reports",
      "Employee attendance history",
      "Data persistence"
    ],
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java", title: "Java" },
    ],
  },
  {
    title: "CV Template",
    description: "A CV Template Project",
    longDescription: "A professionally designed CV template built with clean HTML and CSS. Easy to customize and use for creating professional resumes.",
    link: "https://github.com/opratem/CVBuilderTemplate",
    githubLink: "https://github.com/opratem/CVBuilderTemplate",
    type: "Frontend",
    techStack: ["HTML5", "CSS3"],
    features: [
      "Professional design",
      "Easy to customize",
      "Print-friendly layout",
      "Responsive design",
      "Clean code structure"
    ],
    icons: [
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5", title: "HTML5" },
      { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3", title: "CSS3" },
    ],
  },
];

function ProjectCard({ project, index, onViewDetails }: { project: Project; index: number; onViewDetails: () => void }) {
  const ref = useScrollReveal({ delay: index * 100, threshold: 0.15 });

  return (
    <div
      ref={ref}
      className="scroll-reveal project-card flex flex-col h-full p-4 md:p-7 rounded-2xl transition-all duration-300 cursor-pointer border border-transparent hover:border-[var(--accent-glow)] group"
      style={{
        background: 'var(--bg-secondary)',
        boxShadow: 'var(--card-shadow)',
      }}
      tabIndex={0}
      onClick={onViewDetails}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onViewDetails();
        }
      }}
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

      <h2 className="text-base md:text-lg font-bold mb-2 group-hover:underline" style={{ color: 'var(--accent-light)' }}>
        {project.title}
      </h2>

      <div className="flex items-center gap-2 mb-3">
        <Badge
          variant="secondary"
          className="text-[10px] uppercase tracking-wide font-semibold px-2 py-0.5"
          style={{
            background: project.type === 'Full-stack' ? 'rgba(59, 130, 246, 0.15)' :
                       project.type === 'Frontend' ? 'rgba(168, 85, 247, 0.15)' :
                       project.type === 'Backend' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(236, 72, 153, 0.15)',
            color: project.type === 'Full-stack' ? '#60a5fa' :
                   project.type === 'Frontend' ? '#c084fc' :
                   project.type === 'Backend' ? '#4ade80' : '#f472b6',
            border: `1px solid ${project.type === 'Full-stack' ? 'rgba(59, 130, 246, 0.3)' :
                                 project.type === 'Frontend' ? 'rgba(168, 85, 247, 0.3)' :
                                 project.type === 'Backend' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(236, 72, 153, 0.3)'}`,
          }}
        >
          {project.type}
        </Badge>
      </div>

      <p className="flex-grow text-sm md:text-base leading-[1.55] mb-4 text-left line-clamp-3" style={{ color: 'var(--text-secondary)' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.techStack.slice(0, 3).map((tech) => (
          <Badge
            key={tech}
            variant="outline"
            className="text-[10px] px-2 py-0.5 font-medium"
            style={{
              background: 'rgba(255, 255, 255, 0.03)',
              borderColor: 'rgba(255, 255, 255, 0.1)',
              color: 'var(--text-secondary)',
            }}
          >
            {tech}
          </Badge>
        ))}
        {project.techStack.length > 3 && (
          <Badge
            variant="outline"
            className="text-[10px] px-2 py-0.5 font-medium"
            style={{
              background: 'rgba(250, 136, 27, 0.1)',
              borderColor: 'rgba(250, 136, 27, 0.3)',
              color: 'var(--accent)',
            }}
          >
            +{project.techStack.length - 3}
          </Badge>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onViewDetails();
        }}
        className="self-center font-semibold px-5 py-2 rounded-lg transition-all duration-200"
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
        View Details
      </button>
    </div>
  );
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<ProjectType | "All">("All");
  const [selectedTech, setSelectedTech] = useState<string>("All");

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.techStack.forEach(tech => techs.add(tech));
    });
    return ["All", ...Array.from(techs).sort()];
  }, []);

  // Get all project types
  const projectTypes: (ProjectType | "All")[] = ["All", "Full-stack", "Frontend", "Backend", "Mobile"];

  // Filter projects based on search and filters
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesType = selectedType === "All" || project.type === selectedType;
      const matchesTech = selectedTech === "All" || project.techStack.includes(selectedTech);

      return matchesSearch && matchesType && matchesTech;
    });
  }, [searchQuery, selectedType, selectedTech]);

  return (
    <PageTransition>
    <main className="text-center px-4 pt-32 pb-16 transition-all duration-300" style={{ background: 'var(--bg-primary)' }}>
      <div className="mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-[0.05em]" style={{ color: 'var(--accent-light)' }}>
          My Work
        </h1>
        <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
          Each project is a story of problem-solving, learning, and growth. From climate action to enterprise solutions, here&apos;s what I&apos;ve been building.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="max-w-[1400px] mx-auto mb-8 px-2 md:px-8">
        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search projects by name, description, or technology..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-6 text-base"
            style={{
              background: 'var(--bg-secondary)',
              borderColor: 'var(--accent-glow)',
              color: 'var(--text-primary)'
            }}
          />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          {/* Project Type Filter */}
          <div className="flex-1">
            <label className="block text-xs font-medium mb-2.5 text-left uppercase tracking-wider" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
              Project Type
            </label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((type) => {
                const isSelected = selectedType === type;
                const getTypeColor = (t: string) => {
                  if (t === 'Full-stack') return { bg: 'rgba(59, 130, 246, 0.15)', border: 'rgba(59, 130, 246, 0.3)', text: '#60a5fa' };
                  if (t === 'Frontend') return { bg: 'rgba(168, 85, 247, 0.15)', border: 'rgba(168, 85, 247, 0.3)', text: '#c084fc' };
                  if (t === 'Backend') return { bg: 'rgba(34, 197, 94, 0.15)', border: 'rgba(34, 197, 94, 0.3)', text: '#4ade80' };
                  if (t === 'Mobile') return { bg: 'rgba(236, 72, 153, 0.15)', border: 'rgba(236, 72, 153, 0.3)', text: '#f472b6' };
                  return { bg: 'rgba(250, 136, 27, 0.15)', border: 'rgba(250, 136, 27, 0.3)', text: '#fa881b' };
                };
                const colors = getTypeColor(type);

                return (
                  <Badge
                    key={type}
                    variant="outline"
                    className="cursor-pointer transition-all hover:scale-105 text-[11px] px-3 py-1 font-medium"
                    style={isSelected ? {
                      background: colors.bg,
                      borderColor: colors.border,
                      color: colors.text,
                      fontWeight: 600
                    } : {
                      background: 'rgba(255, 255, 255, 0.02)',
                      borderColor: 'rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-secondary)',
                    }}
                    onClick={() => setSelectedType(type)}
                  >
                    {type}
                  </Badge>
                );
              })}
            </div>
          </div>

          {/* Technology Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2 text-left" style={{ color: 'var(--text-secondary)' }}>
              Technology
            </label>
            <select
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
              className="w-full px-3 py-2 rounded-md border text-sm"
              style={{
                background: 'var(--bg-secondary)',
                borderColor: 'var(--accent-glow)',
                color: 'var(--text-primary)'
              }}
            >
              {allTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p className="text-sm text-left mb-4" style={{ color: 'var(--text-secondary)' }}>
          Showing {filteredProjects.length} of {projects.length} projects
        </p>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid gap-6 md:gap-8 px-2 md:px-8 max-w-[1400px] mx-auto" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
              onViewDetails={() => setSelectedProject(project)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>
            No projects found matching your criteria. Try adjusting your filters.
          </p>
        </div>
      )}

      {/* Project Details Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto" style={{ background: 'var(--bg-secondary)' }}>
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold pr-8 mb-2" style={{ color: 'var(--accent-light)' }}>
                  {selectedProject.title}
                </DialogTitle>
                <div className="flex items-center gap-2 mb-3">
                  <Badge
                    variant="secondary"
                    className="text-[10px] uppercase tracking-wide font-semibold px-2.5 py-1"
                    style={{
                      background: selectedProject.type === 'Full-stack' ? 'rgba(59, 130, 246, 0.15)' :
                                 selectedProject.type === 'Frontend' ? 'rgba(168, 85, 247, 0.15)' :
                                 selectedProject.type === 'Backend' ? 'rgba(34, 197, 94, 0.15)' : 'rgba(236, 72, 153, 0.15)',
                      color: selectedProject.type === 'Full-stack' ? '#60a5fa' :
                             selectedProject.type === 'Frontend' ? '#c084fc' :
                             selectedProject.type === 'Backend' ? '#4ade80' : '#f472b6',
                      border: `1px solid ${selectedProject.type === 'Full-stack' ? 'rgba(59, 130, 246, 0.3)' :
                                           selectedProject.type === 'Frontend' ? 'rgba(168, 85, 247, 0.3)' :
                                           selectedProject.type === 'Backend' ? 'rgba(34, 197, 94, 0.3)' : 'rgba(236, 72, 153, 0.3)'}`,
                    }}
                  >
                    {selectedProject.type}
                  </Badge>
                </div>
                <DialogDescription className="text-base pt-2" style={{ color: 'var(--text-secondary)' }}>
                  {selectedProject.longDescription || selectedProject.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-6 mt-4">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold mb-3 text-left" style={{ color: 'var(--accent-light)' }}>
                    Technology Stack
                  </h4>
                  <div className="flex gap-3 flex-wrap">
                    {selectedProject.icons.map((icon) => (
                      <div key={icon.alt} className="flex items-center gap-2 px-3 py-2 rounded-lg" style={{ background: 'var(--bg-primary)' }}>
                        <img
                          src={icon.src}
                          alt={icon.alt}
                          title={icon.title}
                          className="w-6 h-6"
                        />
                        <span className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                          {icon.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div>
                    <h4 className="font-semibold mb-3 text-left" style={{ color: 'var(--accent-light)' }}>
                      Key Features
                    </h4>
                    <ul className="space-y-2 text-left">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: 'var(--accent)' }} />
                          <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t" style={{ borderColor: 'var(--accent-glow)' }}>
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:scale-105"
                      style={{
                        background: 'var(--accent)',
                        color: 'white',
                      }}
                    >
                      <Globe className="w-4 h-4" />
                      {selectedProject.link.includes('github') || selectedProject.link.includes('bitbucket') ? 'View Repository' : 'Visit Live Site'}
                    </a>
                  )}
                  {selectedProject.githubLink && selectedProject.githubLink !== selectedProject.link && (
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold border transition-all hover:scale-105"
                      style={{
                        borderColor: 'var(--accent)',
                        color: 'var(--accent)',
                      }}
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
    </PageTransition>
  );
}
