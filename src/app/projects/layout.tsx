import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects - Full Stack & Backend Development Portfolio",
  description: "Explore Praise Olufemi's portfolio of full-stack and backend projects including WasteLess App (Climate Action), CV Builder, Church Management System, and more. Built with Java, Spring Boot, Python, React, and Next.js.",
  openGraph: {
    title: "Projects Portfolio - Praise Olufemi",
    description: "Full-stack and backend development projects showcasing expertise in Java, Spring Boot, Python, Django, React, and Next.js. From climate action to enterprise solutions.",
    images: ["/praise-professional.jpg"],
    url: "https://praisetemiloluwaolufemi.vercel.app/projects",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects Portfolio - Praise Olufemi",
    description: "Full-stack and backend development projects in Java, Spring Boot, Python, React, and more.",
    images: ["/praise-professional.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for CollectionPage
  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Projects Portfolio",
    "description": "A collection of full-stack and backend development projects by Praise Temiloluwa Olufemi",
    "url": "https://praisetemiloluwaolufemi.vercel.app/projects",
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://praisetemiloluwaolufemi.vercel.app"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Projects",
          "item": "https://praisetemiloluwaolufemi.vercel.app/projects"
        }
      ]
    },
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "CreativeWork",
          "name": "WasteLess App - Climate Action Food Waste Reducer",
          "description": "A comprehensive web application designed to combat climate change by reducing household food waste",
          "url": "https://github.com/Favoritetechgirl/WastelessApp-BE",
          "creator": {
            "@type": "Person",
            "@id": "https://praisetemiloluwaolufemi.vercel.app/#person"
          },
          "keywords": "Spring Boot, Java, React, PostgreSQL, Climate Action"
        },
        {
          "@type": "CreativeWork",
          "name": "CV Builder - Professional Resume Builder",
          "description": "A modern, feature-rich CV/Resume builder with ATS optimization and multiple professional templates",
          "url": "https://cvbuildercv.vercel.app/",
          "creator": {
            "@type": "Person",
            "@id": "https://praisetemiloluwaolufemi.vercel.app/#person"
          },
          "keywords": "React, TypeScript, Tailwind CSS, Supabase"
        },
        {
          "@type": "CreativeWork",
          "name": "The Prevailing Word Believers Ministry Website",
          "description": "A comprehensive full-stack church management website with member portal and admin dashboard",
          "url": "https://tpwbm.vercel.app",
          "creator": {
            "@type": "Person",
            "@id": "https://praisetemiloluwaolufemi.vercel.app/#person"
          },
          "keywords": "Next.js, TypeScript, React, Tailwind CSS, PostgreSQL"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      {children}
    </>
  );
}
