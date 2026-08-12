import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="pt-32 pb-24 bg-white">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="text-brand-red text-xs font-bold tracking-[0.2em] uppercase mb-3">
            Abacus Star General Trading LLC
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-brand-dark">
            {title}
          </h1>
          <span className="block h-[3px] w-14 bg-brand-red mt-5 mb-4" />
          <p className="text-brand-gray text-sm mb-10">Last updated: {updated}</p>
          <div className="prose-legal space-y-7 text-brand-gray text-[15px] leading-relaxed">
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export function LegalSection({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg font-bold text-brand-dark mb-2.5">{heading}</h2>
      {children}
    </section>
  );
}
