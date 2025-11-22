"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Sparkles, TrendingUp } from "lucide-react";

interface Skill {
  name: string;
  level: number;
  description: string;
  projects: string[];
  yearsOfExperience: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: [
      { name: "Java", level: 90, description: "Primary language for backend development with extensive experience in Spring Boot ecosystem.", projects: ["E-Commerce Platform", "Church Management System", "RESTful APIs"], yearsOfExperience: "3+ years" },
      { name: "Python", level: 85, description: "Used for data processing, automation, scripting, and Django web applications.", projects: ["Data Analysis Tools", "Automation Scripts", "Django Web Apps"], yearsOfExperience: "3+ years" },
      { name: "JavaScript", level: 88, description: "Full-stack JavaScript development with modern ES6+ features and frameworks.", projects: ["React Applications", "Next.js Websites", "Node.js APIs"], yearsOfExperience: "2+ years" },
      { name: "TypeScript", level: 82, description: "Type-safe development for large-scale applications and better code maintainability.", projects: ["Portfolio Website", "Enterprise Applications"], yearsOfExperience: "2+ years" },
      { name: "Golang", level: 70, description: "Learning concurrent programming and high-performance backend services.", projects: ["Mentoring Bootcamp Projects", "CLI Tools"], yearsOfExperience: "1 year" },
      { name: "HTML", level: 95, description: "Semantic HTML5, accessibility best practices, and modern web standards.", projects: ["All Web Projects"], yearsOfExperience: "4+ years" },
      { name: "CSS", level: 90, description: "Advanced CSS, animations, Flexbox, Grid, and responsive design.", projects: ["All Web Projects"], yearsOfExperience: "4+ years" }
    ]
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "Spring Boot", level: 90, description: "Expert in building enterprise-grade RESTful APIs with Spring ecosystem.", projects: ["E-Commerce Backend", "Authentication Systems", "Microservices"], yearsOfExperience: "2+ years" },
      { name: "React", level: 85, description: "Building modern, component-based UIs with hooks, context, and state management.", projects: ["Admin Dashboards", "Portfolio Sites", "CRUD Applications"], yearsOfExperience: "2+ years" },
      { name: "Next.js", level: 88, description: "Server-side rendering, static site generation, and full-stack React applications.", projects: ["Portfolio Website", "Church Website", "CV Builder"], yearsOfExperience: "1.5+ years" },
      { name: "Django", level: 75, description: "Python web framework for rapid development and clean design.", projects: ["Web Applications", "API Development"], yearsOfExperience: "1+ year" },
      { name: "Express", level: 80, description: "Minimalist Node.js framework for building APIs and web applications.", projects: ["RESTful APIs", "Backend Services"], yearsOfExperience: "2+ years" },
      { name: "Tailwind CSS", level: 92, description: "Utility-first CSS framework for rapid UI development.", projects: ["All Recent Projects"], yearsOfExperience: "2+ years" }
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "PostgreSQL", level: 85, description: "Relational database design, optimization, and complex queries.", projects: ["E-Commerce Platform", "User Management Systems"], yearsOfExperience: "2+ years" },
      { name: "NeonDB", level: 75, description: "Serverless Postgres for modern cloud applications.", projects: ["Cloud-Native Applications"], yearsOfExperience: "1 year" },
      { name: "Supabase", level: 78, description: "Open-source Firebase alternative with real-time capabilities.", projects: ["Full-Stack Applications"], yearsOfExperience: "1 year" },
      { name: "Docker", level: 70, description: "Containerization for consistent development and deployment environments.", projects: ["Microservices", "Development Environments"], yearsOfExperience: "1+ year" },
      { name: "Git", level: 90, description: "Version control, branching strategies, and collaborative development.", projects: ["All Projects"], yearsOfExperience: "3+ years" },
      { name: "Linux", level: 80, description: "System administration, shell scripting, and server management.", projects: ["Server Configuration", "DevOps Tasks"], yearsOfExperience: "3+ years" }
    ]
  },
  {
    title: "Specializations",
    skills: [
      { name: "RESTful APIs", level: 92, description: "Designing and implementing scalable, secure REST APIs with proper authentication.", projects: ["E-Commerce API", "User Authentication", "CRUD Services"], yearsOfExperience: "3+ years" },
      { name: "Full-Stack Development", level: 88, description: "End-to-end application development from database to user interface.", projects: ["Complete Web Applications"], yearsOfExperience: "2+ years" },
      { name: "Robotics Engineering", level: 80, description: "Arduino & ESP32 programming, IoT integration, and hardware control.", projects: ["Swarm Robotics", "Gesture-Controlled Robots", "Maze Solvers"], yearsOfExperience: "1+ year" },
      { name: "Arduino & ESP32", level: 82, description: "Microcontroller programming with Wi-Fi, UDP, and sensor integration.", projects: ["IoT Devices", "Smart Robots", "Automation Systems"], yearsOfExperience: "1+ year" },
      { name: "Problem Solving", level: 90, description: "Analytical thinking, algorithmic problem solving, and debugging complex systems.", projects: ["All Development Work", "Code Mentoring"], yearsOfExperience: "4+ years" }
    ]
  }
];

const currentlyLearning = [
  { name: "Kubernetes", icon: "☸️" },
  { name: "GraphQL", icon: "◆" },
  { name: "Redis", icon: "⚡" },
  { name: "AWS", icon: "☁️" },
  { name: "CI/CD", icon: "🔄" }
];

export function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleSkillClick = (skill: Skill) => {
    setSelectedSkill(skill);
    setIsDialogOpen(true);
  };

  const getProgressColor = (level: number) => {
    return "#3b82f6"; // Blue for all skill levels
  };

  return (
    <>
      <section className="py-10 md:py-20 px-4 transition-all duration-300" style={{ background: 'var(--bg-primary)' }}>
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-8 md:mb-16">
            <span className="inline-block text-[0.85rem] font-semibold tracking-[2px] uppercase mb-2" style={{ color: 'var(--accent)' }}>
              MY TOOLBOX
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
              Technologies & Tools
            </h2>
            <p className="text-base md:text-lg max-w-[600px] mx-auto leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Click on any skill to see detailed information about my experience and projects
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-4 mb-12">
            {skillsData.map((category) => (
              <div key={category.title} className="p-6 md:p-8 rounded-2xl transition-all duration-300" style={{ background: 'var(--bg-secondary)', boxShadow: 'var(--card-shadow)' }}>
                <h3 className="text-xl font-semibold mb-6 pb-3 flex items-center gap-2" style={{ color: 'var(--accent-light)', borderBottom: '2px solid var(--bg-tertiary)' }}>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="group cursor-pointer" onClick={() => handleSkillClick(skill)}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium transition-colors duration-200 group-hover:text-[var(--accent)]" style={{ color: 'var(--text-primary)' }}>
                          {skill.name}
                        </span>
                      </div>
                      <div className="h-2.5 rounded-full overflow-hidden relative" style={{ background: 'rgba(255, 255, 255, 0.05)' }}>
                        <div
                          className="h-full rounded-full transition-all duration-500 group-hover:scale-x-105 origin-left absolute top-0 left-0"
                          style={{
                            width: `${skill.level}%`,
                            background: `linear-gradient(90deg, ${getProgressColor(skill.level)}, ${getProgressColor(skill.level)}ee)`,
                            boxShadow: `0 0 10px ${getProgressColor(skill.level)}60`
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 md:p-8 rounded-2xl text-center" style={{ background: 'linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)', boxShadow: '0 8px 30px rgba(250, 136, 27, 0.1)' }}>
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-5 h-5" style={{ color: 'var(--accent)' }} />
              <h3 className="text-xl md:text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>
                Currently Learning
              </h3>
              <TrendingUp className="w-5 h-5" style={{ color: 'var(--accent)' }} />
            </div>
            <p className="text-sm md:text-base mb-6" style={{ color: 'var(--text-secondary)' }}>
              Continuously expanding my skill set with cutting-edge technologies
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              {currentlyLearning.map((tech) => (
                <Badge key={tech.name} className="px-4 py-2 text-base font-medium transition-all duration-300 hover:scale-110 cursor-default" style={{ background: 'var(--accent)', color: '#fff', boxShadow: '0 4px 12px rgba(250, 136, 27, 0.3)' }}>
                  <span className="mr-2">{tech.icon}</span>
                  {tech.name}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-[500px]" style={{ background: 'var(--bg-secondary)', borderColor: 'var(--bg-tertiary)' }}>
          {selectedSkill && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4" style={{ color: 'var(--accent-light)' }}>
                  {selectedSkill.name}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Experience</h4>
                  <p className="text-base" style={{ color: 'var(--text-primary)' }}>{selectedSkill.yearsOfExperience}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Description</h4>
                  <p className="text-base leading-relaxed" style={{ color: 'var(--text-primary)' }}>{selectedSkill.description}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-2" style={{ color: 'var(--text-secondary)' }}>Notable Projects</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedSkill.projects.map((project) => (
                      <Badge key={project} className="px-3 py-1 text-sm" style={{ background: 'var(--bg-tertiary)', color: 'var(--text-secondary)', border: '1px solid var(--accent)' }}>
                        {project}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
