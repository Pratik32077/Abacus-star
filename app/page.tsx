import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { Trading } from "@/components/sections/Trading";
import { Stats } from "@/components/sections/Stats";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Services } from "@/components/sections/Services";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <GlobalReach />
        <Trading />
        <Stats />
        <CtaBanner />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
