"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Logo } from "./logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Initialize theme from localStorage or default to dark
    try {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      const initialTheme = savedTheme || "dark";
      setTheme(initialTheme);
      document.documentElement.setAttribute("data-theme", initialTheme);
    } catch {
      // Fallback to dark theme if localStorage is not available (e.g., in iframe)
      setTheme("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  useEffect(() => {
    // Handle scroll effect for navbar
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    try {
      localStorage.setItem("theme", newTheme);
    } catch {
      // Ignore localStorage error
    }
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[1005] transition-all duration-300 ${
        scrolled ? 'backdrop-blur-[12px] shadow-lg' : 'backdrop-blur-[9px]'
      }`}
      style={{
        background: scrolled ? 'var(--bg-navbar)' : 'rgba(22, 24, 34, 0.7)',
        boxShadow: scrolled ? 'var(--box-shadow)' : '0 4px 20px rgba(0, 0, 0, 0.1)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent'
      }}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between" style={{ height: 'var(--header-height)' }}>
        {/* Brand */}
        <Link
          href="/"
          className="flex items-center gap-3 transition-opacity duration-200 hover:opacity-80"
        >
          <Logo variant="default" />
          <span className="hidden md:block text-[1.1rem] font-bold tracking-[0.6px]" style={{ color: 'var(--text-primary)' }}>
            Praise T. Olufemi
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="Main navigation">
          <ul className="flex gap-[34px] list-none p-0 m-0" role="menubar">
            {navLinks.map((link) => (
              <li key={link.href} role="none">
                <Link
                  href={link.href}
                  role="menuitem"
                  aria-current={pathname === link.href ? "page" : undefined}
                  className={`text-[1.07rem] font-medium tracking-[0.2px] relative py-[7px] transition-colors duration-200 ${
                    pathname === link.href
                      ? "font-bold tracking-[1px]"
                      : ""
                  }`}
                  style={{
                    color: pathname === link.href ? 'var(--accent-light)' : 'var(--text-primary)'
                  }}
                  onMouseEnter={(e) => {
                    if (pathname !== link.href) {
                      e.currentTarget.style.color = 'var(--accent)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (pathname !== link.href) {
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Nav Actions (Theme Toggle + Mobile Menu) */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button
            className="bg-transparent border-none w-10 h-10 p-2 cursor-pointer flex items-center justify-center rounded-full transition-colors duration-200 hover:bg-white/10"
            aria-label="Toggle dark/light mode"
            onClick={toggleTheme}
          >
            <svg
              className={`transition-all duration-300 ${theme === "light" ? "opacity-100 scale-100" : "opacity-0 scale-50 absolute"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--text-primary)' }}
            >
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </svg>
            <svg
              className={`transition-all duration-300 ${theme === "dark" ? "opacity-100 scale-100" : "opacity-0 scale-50 absolute"}`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ color: 'var(--text-primary)' }}
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </button>

          {/* Mobile Menu Toggle */}
          <div
            className={`md:hidden flex flex-col justify-between w-[30px] h-[21px] cursor-pointer z-[1010] ${mobileMenuOpen ? "active" : ""}`}
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span
              className="block h-[3px] w-full rounded-[3px] transition-all duration-300"
              style={{
                backgroundColor: 'var(--text-primary)',
                transform: mobileMenuOpen ? 'translateY(9px) rotate(45deg)' : 'none'
              }}
            ></span>
            <span
              className="block h-[3px] w-full rounded-[3px] transition-all duration-300"
              style={{
                backgroundColor: 'var(--text-primary)',
                opacity: mobileMenuOpen ? 0 : 1
              }}
            ></span>
            <span
              className="block h-[3px] w-full rounded-[3px] transition-all duration-300"
              style={{
                backgroundColor: 'var(--text-primary)',
                transform: mobileMenuOpen ? 'translateY(-9px) rotate(-45deg)' : 'none'
              }}
            ></span>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <nav
        className={`md:hidden absolute left-0 w-full backdrop-blur-[9px] p-4 transition-transform duration-300 ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-[150%]"
        }`}
        style={{
          top: 'var(--header-height)',
          background: 'var(--bg-navbar)',
          boxShadow: 'var(--box-shadow)'
        }}
        aria-label="Main navigation"
      >
        <ul className="flex flex-col items-center gap-6 list-none p-0 m-0" role="menubar">
          {navLinks.map((link) => (
            <li key={link.href} role="none">
              <Link
                href={link.href}
                role="menuitem"
                aria-current={pathname === link.href ? "page" : undefined}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-5 py-2.5 text-[1.1rem] font-medium transition-colors duration-200 ${
                  pathname === link.href ? "font-bold" : ""
                }`}
                style={{
                  color: pathname === link.href ? 'var(--accent-light)' : 'var(--text-primary)'
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
