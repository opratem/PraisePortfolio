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
  title: "Praise Temiloluwa Olufemi - Portfolio",
  description: "Computer Engineer and Backend Developer specializing in Java, Spring Boot, and Web Technologies",
  keywords: ["Full Stack Developer", "Software Engineer", "Web Development", "Java", "Spring Boot", "React"],
  authors: [{ name: "Praise Temiloluwa Olufemi" }],
  openGraph: {
    title: "Praise Temiloluwa Olufemi - Portfolio",
    description: "Computer Engineer and Backend Developer specializing in building secure, scalable systems",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Praise Temiloluwa Olufemi - Portfolio",
    description: "Computer Engineer and Backend Developer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
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
