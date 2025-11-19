import { Logo } from "./logo";

export function Footer() {
  return (
    <footer
      className="text-center py-6 md:py-8 text-[1.02rem] tracking-[0.03rem] w-full mt-0 transition-all duration-300"
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-muted)',
        boxShadow: '0 -4px 20px rgba(15,17,42,0.18)'
      }}
    >
      <div className="flex justify-center mb-3">
        <Logo variant="minimal" />
      </div>
      <p className="text-sm md:text-base">
        &copy; 2025 Praise Temiloluwa Olufemi. Crafted with precision and passion.
      </p>
    </footer>
  );
}
