import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost-light" | "ghost-dark";

interface BaseProps {
  variant?: Variant;
  showArrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantClasses: Record<Variant, string> = {
  primary: "bg-brand-red text-white hover:bg-brand-red-dark shadow-[0_10px_30px_-8px_rgba(233,27,35,0.55)]",
  secondary: "bg-brand-dark text-white hover:bg-black",
  "ghost-light":
    "bg-transparent border border-white/40 text-white hover:border-white hover:bg-white/10",
  "ghost-dark":
    "bg-transparent border border-brand-dark/15 text-brand-dark hover:border-brand-red hover:text-brand-red",
};

const base =
  "group inline-flex items-center gap-2 rounded-[4px] px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out hover:-translate-y-0.5";

export function Button({
  variant = "primary",
  showArrow = true,
  className = "",
  children,
  ...props
}: BaseProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={`${base} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </button>
  );
}

export function LinkButton({
  href,
  variant = "primary",
  showArrow = true,
  className = "",
  children,
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={`${base} ${variantClasses[variant]} ${className}`}>
      {children}
      {showArrow && (
        <ArrowRight
          size={16}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Link>
  );
}
