"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const QUICK_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Trading", href: "#trading" },
  { label: "Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

export function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-brand-dark text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        <div>
          <Image
            src="/logo/abacus-star-logo.svg"
            alt="Abacus Star General Trading LLC"
            width={168}
            height={58}
            className="h-11 w-auto mb-5 brightness-0 invert"
          />
          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            A multi-industry business specializing in global trading, IT solutions,
            and financial consultancy, based in Dubai, UAE.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-5">
            Quick Links
          </h3>
          <ul className="space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/60 hover:text-brand-red text-sm transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-5">
            Contact Us
          </h3>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-brand-red mt-0.5 shrink-0" />
              <a href="mailto:info@abacus-star.com" className="hover:text-white transition-colors">
                info@abacus-star.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-brand-red mt-0.5 shrink-0" />
              <span>
                Suite 1601, Saeed Tower-1,
                <br />
                Sheikh Zayed Road,
                <br />
                Dubai, U.A.E
              </span>
            </li>
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-brand-red mt-0.5 shrink-0" />
              <a href="tel:+97142612365" className="hover:text-white transition-colors">
                +971 4 261 2365
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-white mb-5">
            Newsletter
          </h3>
          <p className="text-white/60 text-sm leading-relaxed mb-4">
            Join our newsletter community to receive regular updates on the topics
            that matter to you.
          </p>
          <form
            className="flex items-center gap-0"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Enter Your Email
            </label>
            <input
              id="newsletter-email"
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-white/5 border border-white/15 rounded-l-[6px] px-4 py-2.5 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-brand-red transition-colors"
            />
            <button
              type="submit"
              className="bg-brand-red hover:bg-brand-red-dark transition-colors duration-300 rounded-r-[6px] px-4 py-2.5 text-sm font-semibold shrink-0"
              aria-label="Subscribe"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/45">
          <p>© {new Date().getFullYear()} Abacus Star General Trading LLC. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms Of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
