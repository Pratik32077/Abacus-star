import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard, ServiceCardData } from "@/components/services/ServiceCard";

const SERVICES_DATA: ServiceCardData[] = [
  {
    title: "Management Services",
    icon: "truck",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Container logistics and freight shipping operations",
    pointsLabel: "Core Offerings",
    points: [
      "Supply Chain Management: End-to-end supply chain optimization, logistics management, and cost-efficiency improvements.",
      "Logistics Optimization: Efficient logistics operations to ensure timely deliveries and enhanced customer satisfaction.",
    ],
  },
  {
    title: "Consultancy & IT Services",
    icon: "cpu",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Business consultancy and IT infrastructure technology",
    pointsLabel: "Service List",
    points: [
      "Business Setup & Compliance",
      "Banking Assistance",
      "Financial & Tax Solutions",
      "HR & Payroll Management",
      "Software Development & IT Infrastructure",
      "Cybersecurity Solutions",
    ],
  },
  {
    title: "Manpower Solutions",
    icon: "users",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1800&auto=format&fit=crop",
    imageAlt: "Professional workforce collaborating in a corporate setting",
    pointsLabel: "Core Services",
    points: ["Workforce Sourcing", "Recruitment Support", "HR Administration", "Payroll & Employee Management"],
  },
];

export function Services() {
  return (
    <section id="services" className="scroll-mt-header bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What We Offer"
          heading="Services"
          intro="We offer a broad range of services in collaboration with 720 Management Consulting, ensuring high-value business solutions. For more details, visit www.720transform.com."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
          {SERVICES_DATA.map((item, i) => (
            <ServiceCard key={item.title} data={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
