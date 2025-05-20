import {
  LucideLayout,
  LucidePenLine,
  LucideGrid,
  LucideMonitor,
  LucideSmartphone,
  LucideCode,
  LucideTrendingUp,
  LucideBrain,
  LucideHandshake,
} from "lucide-react";

const services = [
  { icon: <LucideLayout size={25} />, label: "Landing Pages" },
  { icon: <LucidePenLine size={25} />, label: "Copywriting" },
  { icon: <LucideGrid size={25} />, label: "Design Systems" },
  { icon: <LucideMonitor size={25} />, label: "Web App Design" },
  { icon: <LucideSmartphone size={25} />, label: "Mobile App Design" },
  { icon: <LucideCode size={25} />, label: "Framer Development" },
  { icon: <LucideTrendingUp size={25} />, label: "Conversion Optimisation" },
  { icon: <LucideBrain size={25} />, label: "UX Strategy" },
  { icon: <LucideHandshake size={25} />, label: "Implementation Support" },
];

export default function ServicesSection() {
  return (
    <section className="bg-black text-white py-20 px-4 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-6xl font-medium leading-tight">
          Services made for <br /> your journey
        </h2>
        <p className="text-purple-300 font-merriweather italic mt-2">
          Design services built just for SaaS success
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-zinc-900 text-neutral-100 px-4 py-2 rounded-xl border border-zinc-700 hover:bg-zinc-800 transition-all"
          >
            {service.icon}
            <span className="text-sm md:text-base">{service.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
