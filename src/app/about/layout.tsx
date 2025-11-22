import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me - Professional Background & Experience",
  description: "Learn about Praise Temiloluwa Olufemi - Certified Computer Engineer, Backend Developer, Coding Mentor at Learn2earn, and Robotics Engineer at Tech Talent Academy. 7+ years of experience in software development.",
  openGraph: {
    title: "About Praise Olufemi - Professional Background & Experience",
    description: "Certified Computer Engineer with expertise in Backend Development, Robotics, and Mentorship. Currently working at FlexiSAF Edusoft, Learn2earn, and Tech Talent Academy.",
    images: ["/praise-professional.jpg"],
    url: "https://praiseportfolio.com/about",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Praise Olufemi - Professional Background",
    description: "Certified Computer Engineer, Backend Developer, and Coding Mentor with 7+ years of experience.",
    images: ["/praise-professional.jpg"],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for ProfilePage
  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://praiseportfolio.com/#person"
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://praiseportfolio.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://praiseportfolio.com/about"
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
      />
      {children}
    </>
  );
}
