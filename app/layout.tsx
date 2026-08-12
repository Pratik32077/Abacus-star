import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abacus Star General Trading LLC | Global Trading & Business Solutions",
  description:
    "Abacus Star General Trading LLC provides global trading, metals and minerals sourcing, electronics, management, consultancy and IT solutions from Dubai, UAE.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Manrope is loaded via a static <link> here instead of next/font/google
            so the build succeeds in offline/sandboxed environments. Once deployed
            with network access, this can be swapped for next/font/google for
            better performance (self-hosted, zero layout shift). */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
