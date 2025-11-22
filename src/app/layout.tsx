import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { LoadingScreen } from "@/components/loading-screen";
import { ScrollToTop } from "@/components/scroll-to-top";
import { ScrollProgress } from "@/components/scroll-progress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://praisetemiloluwaolufemi.vercel.app'),
  title: {
    default: "Praise Temiloluwa Olufemi - Backend Developer & Computer Engineer",
    template: "%s | Praise Olufemi Portfolio"
  },
  description: "Certified Computer Engineer and Backend Developer specializing in Java, Spring Boot, Python, Django, React, and Next.js. Building secure, scalable backend systems and mentoring aspiring developers.",
  keywords: [
    "Praise Olufemi",
    "Praise Temiloluwa Olufemi",
    "Backend Developer",
    "Computer Engineer",
    "Full Stack Developer",
    "Software Engineer",
    "Java Developer",
    "Spring Boot Developer",
    "Python Developer",
    "Django Developer",
    "React Developer",
    "Next.js Developer",
    "Robotics Engineer",
    "Coding Mentor",
    "Learn2earn Mentor",
    "Tech Talent Academy",
    "FlexiSAF Edusoft",
    "Portfolio",
    "Nigeria Developer",
    "Lagos Developer",
    "Web Development",
    "Backend Architecture",
    "RESTful API",
    "PostgreSQL",
    "IoT Developer"
  ],
  authors: [{ name: "Praise Temiloluwa Olufemi", url: "https://praisetemiloluwaolufemi.vercel.app" }],
  creator: "Praise Temiloluwa Olufemi",
  publisher: "Praise Temiloluwa Olufemi",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://praisetemiloluwaolufemi.vercel.app",
    siteName: "Praise Olufemi Portfolio",
    title: "Praise Temiloluwa Olufemi - Backend Developer & Computer Engineer",
    description: "Certified Computer Engineer and Backend Developer specializing in building secure, scalable systems with Java, Spring Boot, Python, and modern web technologies.",
    images: [
      {
        url: "/praise-professional.jpg",
        width: 1200,
        height: 630,
        alt: "Praise Temiloluwa Olufemi - Professional Photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Praise Temiloluwa Olufemi - Backend Developer & Computer Engineer",
    description: "Certified Computer Engineer building secure, scalable backend systems. Specializing in Java, Spring Boot, Python, Django, and modern web technologies.",
    creator: "@opratem",
    images: ["/praise-professional.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    // Add other verification codes as needed
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Schema.org structured data for the website and person
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Praise Olufemi Portfolio",
    "url": "https://praisetemiloluwaolufemi.vercel.app",
    "description": "Professional portfolio of Praise Temiloluwa Olufemi, Backend Developer and Computer Engineer",
    "author": {
      "@type": "Person",
      "@id": "https://praisetemiloluwaolufemi.vercel.app/#person"
    }
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://praisetemiloluwaolufemi.vercel.app/#person",
    "name": "Praise Temiloluwa Olufemi",
    "alternateName": "Praise Olufemi",
    "url": "https://praisetemiloluwaolufemi.vercel.app",
    "image": "https://praisetemiloluwaolufemi.vercel.app/praise-professional.jpg",
    "jobTitle": "Backend Developer",
    "worksFor": [
      {
        "@type": "Organization",
        "name": "FlexiSAF Edusoft"
      },
      {
        "@type": "Organization",
        "name": "Learn2earn"
      },
      {
        "@type": "Organization",
        "name": "Tech Talent Academy"
      }
    ],
    "alumniOf": {
      "@type": "CollegeOrUniversity",
      "name": "Federal University of Technology Akure"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Yaba",
      "addressRegion": "Lagos",
      "addressCountry": "Nigeria"
    },
    "email": "praiseolufemi1@gmail.com",
    "sameAs": [
      "https://www.linkedin.com/in/praise-olufemi-4a5334177/",
      "https://github.com/opratem",
      "https://twitter.com/opratem"
    ],
    "knowsAbout": [
      "Java",
      "Spring Boot",
      "Python",
      "Django",
      "JavaScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Backend Development",
      "Full Stack Development",
      "Robotics",
      "IoT",
      "Software Engineering"
    ],
    "hasOccupation": [
      {
        "@type": "Occupation",
        "name": "Backend Developer",
        "occupationLocation": {
          "@type": "City",
          "name": "Lagos, Nigeria"
        },
        "skills": "Java, Spring Boot, Python, Django, React, PostgreSQL, RESTful API, Microservices"
      },
      {
        "@type": "Occupation",
        "name": "Coding Mentor",
        "occupationLocation": {
          "@type": "City",
          "name": "Lagos, Nigeria"
        }
      },
      {
        "@type": "Occupation",
        "name": "Robotics Engineer",
        "occupationLocation": {
          "@type": "City",
          "name": "Lagos, Nigeria"
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
