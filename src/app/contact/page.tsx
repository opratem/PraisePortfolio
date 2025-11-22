"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { PageTransition } from "@/components/page-transition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Linkedin, Github, Twitter, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.linkedin.com/in/praise-olufemi-4a5334177/",
    label: "LinkedIn",
    icon: Linkedin,
    color: "#0077B5",
  },
  {
    href: "https://github.com/opratem",
    label: "GitHub",
    icon: Github,
    color: "#333",
  },
  {
    href: "https://twitter.com/opratem",
    label: "Twitter",
    icon: Twitter,
    color: "#1DA1F2",
  },
  {
    href: "mailto:praiseolufemi1@gmail.com",
    label: "Email",
    icon: Mail,
    color: "var(--accent)",
  },
];

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const sectionRef = useScrollReveal({ threshold: 0.2 });
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 3) {
      newErrors.subject = "Subject must be at least 3 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Using Formspree - you need to verify your email first
      const response = await fetch("https://formspree.io/f/mgvqwggg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <main
        className="min-h-screen flex flex-col justify-center items-center px-4 transition-all duration-300"
        style={{
          background: "var(--bg-primary)",
          paddingTop: "calc(var(--header-height) + 40px)",
          paddingBottom: "60px",
        }}
      >
        <div className="w-full max-w-[1000px] mx-auto">
          <div
            ref={sectionRef}
            className="scroll-reveal-scale text-center mb-12"
          >
            <span
              className="inline-block text-[0.85rem] font-semibold tracking-[2px] uppercase mb-2"
              style={{ color: "var(--accent)" }}
            >
              GET IN TOUCH
            </span>
            <h1
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              Let&apos;s Work Together
            </h1>
            <p
              className="text-base md:text-lg max-w-[600px] mx-auto"
              style={{ color: "var(--text-secondary)" }}
            >
              Have a project in mind or just want to chat about tech? Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8 items-start">
            <div
              className="md:col-span-3 p-6 md:p-8 rounded-2xl transition-all duration-300"
              style={{
                background: "var(--bg-secondary)",
                boxShadow: "var(--card-shadow)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Your Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder=""
                    className={errors.name ? "border-red-500" : ""}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Your Email *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder=""
                    className={errors.email ? "border-red-500" : ""}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder=""
                    className={errors.subject ? "border-red-500" : ""}
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold mb-2"
                    style={{ color: "var(--text-primary)" }}
                  >
                    Your Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={6}
                    className={errors.message ? "border-red-500" : ""}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>

                {submitStatus === "success" && (
                  <div
                    className="flex items-center gap-2 p-4 rounded-lg"
                    style={{ background: "rgba(34, 197, 94, 0.1)", border: "1px solid rgb(34, 197, 94)" }}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    <p className="text-green-500 text-sm font-medium">
                      Message sent successfully! I&apos;ll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div
                    className="flex items-center gap-2 p-4 rounded-lg"
                    style={{ background: "rgba(239, 68, 68, 0.1)", border: "1px solid rgb(239, 68, 68)" }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-500" />
                    <p className="text-red-500 text-sm font-medium">
                      Oops! Something went wrong. Please try again or email me directly.
                    </p>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                  }}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div
                className="p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "var(--bg-secondary)",
                  boxShadow: "var(--card-shadow)",
                }}
              >
                <h3
                  className="text-xl font-bold mb-3"
                  style={{ color: "var(--accent-light)" }}
                >
                  Connect With Me
                </h3>
                <p
                  className="text-sm mb-6"
                  style={{ color: "var(--text-secondary)" }}
                >
                  Let&apos;s connect on social media and stay in touch!
                </p>
                <div className="space-y-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-105"
                        style={{
                          background: "var(--bg-tertiary)",
                          border: "1px solid transparent",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = link.color;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "transparent";
                        }}
                      >
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{ background: link.color }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <p
                            className="font-semibold text-sm"
                            style={{ color: "var(--text-primary)" }}
                          >
                            {link.label}
                          </p>
                          <p
                            className="text-xs"
                            style={{ color: "var(--text-secondary)" }}
                          >
                            Follow me on {link.label}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              <div
                className="p-6 rounded-2xl transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)",
                  boxShadow: "0 8px 30px rgba(250, 136, 27, 0.1)",
                }}
              >
                <h3
                  className="text-lg font-bold mb-3"
                  style={{ color: "var(--accent-light)" }}
                >
                  Quick Response
                </h3>
                <p
                  className="text-sm"
                  style={{ color: "var(--text-secondary)" }}
                >
                  I typically respond to messages within 24-48 hours. For urgent inquiries, feel free to reach out directly via email or LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}
