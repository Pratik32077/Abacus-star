import { SectionHeading } from "@/components/ui/SectionHeading";
import { TradingCard, TradingCardData } from "@/components/trading/TradingCard";

const TRADING_DATA: TradingCardData[] = [
  {
    title: "Metals",
    image:
      "https://images.unsplash.com/photo-1612832021060-1e3f5b8c4f9e?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Copper and aluminium metal coils in an industrial facility",
    description:
      "Ferrous and Non-Ferrous Metals: We trade in Copper, Aluminium, Nickel, Zinc, and Steel, both primary and scrap forms.",
    groups: [
      {
        label: "Base Metals",
        items:
          "Copper Cathodes, 8mm Continuous Copper Rods, Copper Blisters, Copper Cement, Aluminium Ingots, ADC 12 Ingots.",
      },
      {
        label: "Steel Products",
        items:
          "Hot Rolled Coils, Sheets, Angles, Channels, Hollow Sections, Deformed Reinforcing Steel Bars, Beams, Wire Rods, Steel Pipes, and Billets.",
      },
      {
        label: "Scrap",
        items:
          "Copper Millberry, Birch and Cliff (No.2), Aluminium Tense, Taint Tabor, UBC (Used Beverage Cans), Aluminium Extrusions (6063), Stainless Steel Scrap (SS304, SS316, SS316L).",
      },
    ],
  },
  {
    title: "Minerals",
    image:
      "",
    imageAlt: "Coal and mineral stockpiles at an industrial mining site",
    description:
      "Sourcing coal and iron ore from key global markets to supply steel manufacturing and power generation industries.",
    groups: [
      {
        label: "Coal",
        items:
          "We trade in coking coal (used in steel production) and steam coal (used in power generation), sourced from Indonesia, Australia, and South Africa.",
      },
      {
        label: "Iron Ore",
        items: "Sourced from India and Indonesia, supplying steel manufacturers globally.",
      },
    ],
  },
  {
    title: "Electronics",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Electronic components and industrial automation equipment",
    description:
      "High-quality sourcing and supply of consumer and industrial electronics from reputable manufacturers worldwide.",
    groups: [
      {
        label: "Consumer Electronics",
        items:
          "High-quality sourcing and supply of smartphones, home appliances, and electronic components from reputable manufacturers.",
      },
      {
        label: "Industrial Equipment",
        items:
          "Advanced industrial electronics and automation solutions to enhance productivity and operational efficiency.",
      },
    ],
  },
];

export function Trading() {
  return (
    <section id="trading" className="scroll-mt-header bg-brand-light py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Trade"
          heading="Trading"
          intro="We specialize in the trading of ferrous and non-ferrous metals, minerals, and commodities, ensuring high-quality sourcing and supply chain efficiency."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
          {TRADING_DATA.map((item, i) => (
            <TradingCard key={item.title} data={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
