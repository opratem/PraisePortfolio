"use client";

import Image from "next/image";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { PageTransition } from "@/components/page-transition";
import {
  GraduationCap,
  Award,
  Code,
  Users,
  Rocket,
  Play,
  MapPin,
  Mail,
  Calendar,
  TrendingUp,
  Heart,
  Zap
} from "lucide-react";

export default function AboutPage() {
  const videoRef = useScrollReveal();
  const bioRef = useScrollReveal();
  const timelineRef = useScrollReveal();
  const passionsRef = useScrollReveal();

  const timelineItems = [
    {
      year: "Oct 2025 - Present",
      title: "Coding Mentor (Piscine Program)",
      organization: "Learn2earn",
      description: "Mentoring beginner programmers through intensive coding bootcamp focused on Go (Golang) programming fundamentals.",
      icon: <Users className="w-5 h-5" />,
      color: "#667eea",
      achievements: [
        "Guided students through hands-on Go programming exercises",
        "Conducted code reviews and audits via Learn2earn Intra dashboard",
        "Monitored group projects and Git workflow proficiency",
        "Fostered growth-oriented learning environment"
      ]
    },
    {
      year: "Jul 2025 - Present",
      title: "Robotics Engineer/Instructor",
      organization: "Tech Talent Academy",
      description: "Designing and programming robotics projects using Arduino and ESP32 microcontrollers with IoT integration.",
      icon: <Rocket className="w-5 h-5" />,
      color: "#f59e0b",
      achievements: [
        "Developed swarm robotics simulations with multi-device communication",
        "Built IoT-enabled prototypes with Wi-Fi and UDP networking",
        "Created gesture-controlled and maze-solving robots",
        "Produced comprehensive technical documentation"
      ]
    },
    {
      year: "Jan 2025 - Present",
      title: "Backend Developer",
      organization: "FlexiSAF Edusoft",
      description: "Developing scalable backend solutions for educational management systems using Java, Spring Boot, and modern web technologies.",
      icon: <Code className="w-5 h-5" />,
      color: "#8b5cf6",
      achievements: [
        "Built React-based CRUD app with JWT authentication",
        "Implemented role-based access control and API integration",
        "Developed church website and CV builder using Next.js",
        "Managed PostgreSQL databases with version control via Git"
      ]
    },
    {
      year: "Jul 2024 - Aug 2024",
      title: "Software Engineering Virtual Experience",
      organization: "Goldman Sachs",
      description: "Completed job simulation as governance analyst responsible for assessing IT security and suggesting improvements.",
      icon: <Award className="w-5 h-5" />,
      color: "#10b981",
      achievements: [
        "Identified outdated password hashing algorithms using Hashcat",
        "Proposed security uplifts for password protection",
        "Analyzed IT security protocols and vulnerabilities"
      ]
    },
    {
      year: "Apr 2022 - Jan 2024",
      title: "Computer Science Teacher",
      organization: "Police Children School Ado-Ekiti",
      description: "Taught Computer Science to Basic 3, 4, and 5 students, managing practical classes and assessments.",
      icon: <Users className="w-5 h-5" />,
      color: "#ec4899",
      achievements: [
        "Delivered comprehensive Computer Science curriculum",
        "Managed computer lab sessions and practical exercises",
        "Conducted student assessments and progress tracking",
        "Developed engaging teaching materials for young learners"
      ]
    },
    {
      year: "Sep 2015 - Sep 2021",
      title: "Computer Engineering Graduate",
      organization: "Federal University of Technology Akure",
      description: "Bachelor of Engineering in Computer Engineering with comprehensive knowledge in programming, networking, and software development.",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "#3b82f6",
      achievements: [
        "Certified Computer Engineer",
        "Specialized in Software Development and Networking",
        "Gained practical experience in full-stack development"
      ]
    }
  ];

  const stats = [
    { label: "Years of Experience", value: "7+", icon: <Calendar className="w-6 h-6" /> },
    { label: "Projects Completed", value: "25+", icon: <Rocket className="w-6 h-6" /> },
    { label: "Students Mentored", value: "150+", icon: <Users className="w-6 h-6" /> },
    { label: "Current Positions", value: "3", icon: <Code className="w-6 h-6" /> }
  ];

  const passions = [
    {
      title: "Backend Architecture",
      description: "Crafting scalable, secure, and performant server-side solutions",
      icon: <Code className="w-6 h-6" />,
      color: "#667eea"
    },
    {
      title: "Mentorship",
      description: "Empowering aspiring developers to reach their full potential",
      icon: <Heart className="w-6 h-6" />,
      color: "#f59e0b"
    },
    {
      title: "Innovation",
      description: "Exploring cutting-edge technologies and building the future",
      icon: <Zap className="w-6 h-6" />,
      color: "#10b981"
    },
    {
      title: "Problem Solving",
      description: "Turning complex challenges into elegant solutions",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "#8b5cf6"
    }
  ];

  return (
    <PageTransition>
      <main className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        {/* Header - matching Projects page style */}
        <div className="text-center px-4 pt-32 pb-16">
          <div className="mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-[0.05em]" style={{ color: 'var(--accent-light)' }}>
              About Me
            </h1>
            <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Building robust systems, mentoring future developers, and exploring the frontiers of technology
            </p>
          </div>
        </div>

        {/* WHO I AM Section - First */}
        <section className="py-8 md:py-16 px-4">
          <div ref={bioRef} className="scroll-reveal max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="order-1 md:order-1">
                <div
                  className="relative rounded-2xl overflow-hidden shadow-2xl mb-6"
                  style={{
                    aspectRatio: '1/1'
                  }}
                >
                  <Image
                    src="/praise-professional.jpg"
                    alt="Praise Temiloluwa Olufemi - Professional Photo"
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div
                    className="p-4 rounded-xl"
                    style={{ background: 'var(--bg-secondary)', boxShadow: 'var(--card-shadow)' }}
                  >
                    <MapPin className="w-5 h-5 mb-2" style={{ color: 'var(--accent)' }} />
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Location</p>
                    <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>Yaba, Lagos</p>
                  </div>
                  <div
                    className="p-4 rounded-xl"
                    style={{ background: 'var(--bg-secondary)', boxShadow: 'var(--card-shadow)' }}
                  >
                    <Mail className="w-5 h-5 mb-2" style={{ color: 'var(--accent)' }} />
                    <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>Email</p>
                    <p className="text-xs" style={{ color: 'var(--text-secondary)' }}>praiseolufemi1@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="order-2 md:order-2">
                <span className="inline-block text-xs md:text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--accent)' }}>
                  WHO I AM
                </span>
                <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6" style={{ color: 'var(--text-primary)' }}>
                  Praise Temiloluwa Olufemi
                </h2>

                <div className="space-y-3 md:space-y-4 text-base md:text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  <p>
                    I&apos;m a <strong style={{ color: 'var(--accent)' }}>Certified Computer Engineer</strong> with practical expertise in Computer Programming, Networking, Software Development, and Full-Stack Development. I build robust, scalable backend systems that power real-world applications.
                  </p>

                  <p>
                    My technical expertise spans <strong>Java</strong>, <strong>Python</strong>, <strong>JavaScript</strong>, and <strong>Golang</strong>, with deep specialization in <strong>Spring Boot</strong>, <strong>Django</strong>, <strong>React</strong>, and <strong>Next.js</strong>. I architect secure backend systems with technologies like <strong>PostgreSQL</strong>, <strong>NeonDB</strong>, <strong>Docker</strong>, and <strong>RESTful APIs</strong>.
                  </p>

                  <p>
                    Beyond traditional software development, I&apos;m pioneering in <strong style={{ color: 'var(--accent)' }}>robotics and IoT</strong>. At Tech Talent Academy, I design and program robotics projects using Arduino and ESP32 microcontrollers, creating everything from gesture-controlled robots to IoT-enabled prototypes with wireless communication.
                  </p>

                  <p>
                    As a <strong style={{ color: 'var(--accent)' }}>Coding Mentor at Learn2earn</strong>, I guide aspiring developers through intensive bootcamps, conducting code reviews, and fostering growth-oriented learning environments. I&apos;m passionate about empowering others to reach their full potential in technology.
                  </p>

                  <p>
                    When I&apos;m not coding or teaching, you&apos;ll find me exploring cutting-edge technologies, contributing to open-source projects, or experimenting with new frameworks and architectures.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6 md:mt-8">
                  {stats.map((stat, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl text-center transition-all duration-300 hover:-translate-y-1"
                      style={{ background: 'var(--bg-secondary)', boxShadow: 'var(--card-shadow)' }}
                    >
                      <div className="flex justify-center mb-2" style={{ color: 'var(--accent)' }}>
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {stat.value}
                      </div>
                      <div className="text-xs" style={{ color: 'var(--text-secondary)' }}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section - Second */}
        <section className="py-16 px-4" style={{ background: 'var(--bg-secondary)' }}>
          <div ref={videoRef} className="scroll-reveal max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--accent)' }}>
                INTRODUCTION
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Meet Praise
              </h2>
            </div>

            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                border: '2px solid rgba(102, 126, 234, 0.2)',
                aspectRatio: '16/9'
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ background: 'var(--accent)' }}
                >
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                  Introduction Video
                </h3>
                <div className="mt-4 px-6 py-3 rounded-lg max-w-xl" style={{
                  background: 'rgba(250, 136, 27, 0.1)',
                  border: '1px solid rgba(250, 136, 27, 0.3)',
                  color: 'var(--accent)'
                }}>
                  <p className="text-sm font-medium">
                    Video coming soon! Add your recorded or AI-generated intro video here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Career Timeline Section - Third */}
        <section className="py-16 px-4">
          <div ref={timelineRef} className="scroll-reveal max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--accent)' }}>
                MY JOURNEY
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                Career Timeline
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                From student to engineer to mentor — here&apos;s how my journey unfolded
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 hidden md:block"
                style={{ background: 'linear-gradient(180deg, var(--accent) 0%, rgba(250, 136, 27, 0.2) 100%)' }}
              />

              {timelineItems.map((item, index) => (
                <div
                  key={index}
                  className={`relative mb-12 md:mb-16 flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full hidden md:block -ml-2 z-10"
                    style={{ background: item.color, boxShadow: `0 0 0 4px var(--bg-secondary), 0 0 0 8px ${item.color}40` }}
                  />

                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div
                      className="p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                      style={{
                        background: 'var(--bg-primary)',
                        border: `2px solid ${item.color}20`,
                        boxShadow: 'var(--card-shadow)'
                      }}
                    >
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ background: `${item.color}20`, color: item.color }}
                        >
                          {item.icon}
                        </div>
                        <span className="text-sm font-bold tracking-wider" style={{ color: item.color }}>
                          {item.year}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium mb-3" style={{ color: 'var(--accent)' }}>
                        {item.organization}
                      </p>

                      <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
                        {item.description}
                      </p>

                      {item.achievements && (
                        <ul className="space-y-2 text-left">
                          {item.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="text-sm flex items-start gap-2"
                              style={{ color: 'var(--text-secondary)' }}
                            >
                              <Award className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: item.color }} />
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>

                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Passions Section - Fourth */}
        <section className="py-16 px-4">
          <div ref={passionsRef} className="scroll-reveal max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block text-sm font-semibold tracking-wider uppercase mb-2" style={{ color: 'var(--accent)' }}>
                MY PASSIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
                What Drives Me
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
                The core values and interests that fuel my work every day
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="p-8 rounded-2xl transition-all duration-300 hover:-translate-y-2 group"
                  style={{
                    background: 'var(--bg-secondary)',
                    boxShadow: 'var(--card-shadow)',
                    border: '1px solid transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${passion.color}40`;
                    e.currentTarget.style.boxShadow = `0 12px 40px ${passion.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.boxShadow = 'var(--card-shadow)';
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110"
                    style={{ background: `${passion.color}20`, color: passion.color }}
                  >
                    {passion.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
                    {passion.title}
                  </h3>
                  <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                    {passion.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 px-4" style={{ background: 'var(--bg-secondary)' }}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Whether you have a project in mind or just want to connect, I&apos;d love to hear from you
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="/contact"
                className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'var(--accent)',
                  color: '#fff',
                  boxShadow: '0 4px 20px rgba(250, 136, 27, 0.3)'
                }}
              >
                Get In Touch
              </a>
              <a
                href="/projects"
                className="px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--accent)'
                }}
              >
                View My Work
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
