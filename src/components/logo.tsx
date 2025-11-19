"use client";

export function Logo({ variant = "default", className = "" }: { variant?: "default" | "minimal" | "badge" | "text" | "monogram", className?: string }) {

  // Default: Geometric PT with accent border
  if (variant === "default") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Hexagonal background */}
          <path
            d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
            fill="var(--accent)"
            fillOpacity="0.15"
          />
          <path
            d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
            stroke="var(--accent)"
            strokeWidth="2"
          />
          {/* PTO Letters */}
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="var(--accent)"
            fontSize="14"
            fontWeight="700"
            fontFamily="var(--font-space-grotesk)"
            letterSpacing="0.5"
          >
            PTO
          </text>
        </svg>
      </div>
    );
  }

  // Minimal: Simple circle with initials
  if (variant === "minimal") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="18" cy="18" r="17" stroke="var(--accent)" strokeWidth="2"/>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="var(--accent)"
            fontSize="12"
            fontWeight="700"
            fontFamily="var(--font-space-grotesk)"
            letterSpacing="0.5"
          >
            PTO
          </text>
        </svg>
      </div>
    );
  }

  // Badge: Rounded square with gradient
  if (variant === "badge") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--accent)" />
              <stop offset="100%" stopColor="var(--accent-light)" />
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="36" height="36" rx="8" fill="url(#logoGradient)" fillOpacity="0.15"/>
          <rect x="2" y="2" width="36" height="36" rx="8" stroke="var(--accent)" strokeWidth="2"/>
          <text
            x="50%"
            y="50%"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="var(--accent)"
            fontSize="14"
            fontWeight="700"
            fontFamily="var(--font-space-grotesk)"
            letterSpacing="0.5"
          >
            PTO
          </text>
        </svg>
      </div>
    );
  }

  // Text: Stylized text logo
  if (variant === "text") {
    return (
      <div className={`flex items-center gap-1 ${className}`}>
        <div className="relative">
          <span
            className="text-2xl font-bold tracking-tight"
            style={{
              background: 'linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              fontFamily: 'var(--font-space-grotesk)',
            }}
          >
            PTO
          </span>
          <div
            className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full"
            style={{ background: 'var(--accent)' }}
          />
        </div>
        <span className="text-xs font-semibold tracking-wider opacity-60" style={{ color: 'var(--text-secondary)' }}>
          OLUFEMI
        </span>
      </div>
    );
  }

  // Monogram: Sophisticated stacked design
  if (variant === "monogram") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Outer frame */}
          <rect x="4" y="4" width="40" height="40" rx="6" stroke="var(--accent)" strokeWidth="2.5" fill="none"/>

          {/* Inner geometric pattern */}
          <line x1="24" y1="8" x2="24" y2="40" stroke="var(--accent)" strokeWidth="1" opacity="0.2"/>
          <line x1="8" y1="24" x2="40" y2="24" stroke="var(--accent)" strokeWidth="1" opacity="0.2"/>

          {/* Monogram letters - stacked design */}
          <text
            x="24"
            y="20"
            dominantBaseline="middle"
            textAnchor="middle"
            fill="var(--accent)"
            fontSize="11"
            fontWeight="800"
            fontFamily="var(--font-space-grotesk)"
            letterSpacing="1.5"
          >
            PTO
          </text>

          {/* Decorative underline */}
          <line x1="14" y1="26" x2="34" y2="26" stroke="var(--accent-light)" strokeWidth="2" strokeLinecap="round"/>

          {/* Small accent dots */}
          <circle cx="14" cy="32" r="1.5" fill="var(--accent-light)"/>
          <circle cx="34" cy="32" r="1.5" fill="var(--accent-light)"/>
        </svg>
      </div>
    );
  }

  return null;
}

// Animated version for loading or special occasions
export function LogoAnimated({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="logoGradientAnimated" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--accent)">
              <animate attributeName="stop-color" values="var(--accent);var(--accent-light);var(--accent)" dur="3s" repeatCount="indefinite"/>
            </stop>
            <stop offset="100%" stopColor="var(--accent-light)">
              <animate attributeName="stop-color" values="var(--accent-light);var(--accent);var(--accent-light)" dur="3s" repeatCount="indefinite"/>
            </stop>
          </linearGradient>
        </defs>

        {/* Rotating hexagon */}
        <path
          d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
          fill="url(#logoGradientAnimated)"
          fillOpacity="0.15"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 20 20"
            to="360 20 20"
            dur="20s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M20 2L35 11V29L20 38L5 29V11L20 2Z"
          stroke="url(#logoGradientAnimated)"
          strokeWidth="2"
        />

        {/* PTO Letters */}
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fill="var(--accent)"
          fontSize="14"
          fontWeight="700"
          fontFamily="var(--font-space-grotesk)"
          letterSpacing="0.5"
        >
          PTO
        </text>
      </svg>
    </div>
  );
}
