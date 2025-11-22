import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Me - Get In Touch",
  description: "Get in touch with Praise Temiloluwa Olufemi for project collaborations, mentorship opportunities, or tech discussions. Available for backend development and full-stack projects.",
  openGraph: {
    title: "Contact Praise Olufemi - Let's Work Together",
    description: "Reach out for project collaborations, mentorship opportunities, or tech discussions. Backend Developer and Computer Engineer available for freelance work.",
    images: ["/praise-professional.jpg"],
    url: "https://praiseportfolio.com/contact",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Praise Olufemi",
    description: "Get in touch for project collaborations and opportunities.",
    images: ["/praise-professional.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org structured data for ContactPage
  const contactPageSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Praise Olufemi",
    "description": "Get in touch with Praise Temiloluwa Olufemi for project collaborations and opportunities",
    "url": "https://praiseportfolio.com/contact",
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
          "name": "Contact",
          "item": "https://praiseportfolio.com/contact"
        }
      ]
    },
    "mainEntity": {
      "@type": "Person",
      "@id": "https://praiseportfolio.com/#person",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "praiseolufemi1@gmail.com",
        "contactType": "Professional",
        "availableLanguage": "English"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }}
      />
      {children}
    </>
  );
}
