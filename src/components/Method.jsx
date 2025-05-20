import React from "react";
import MethodCard from "./ui/MethodCard";
import {
  PiCirclesFour,
  PiClipboardText,
  PiSquaresFour,
  PiChartLineUp,
  PiLightbulb,
} from "react-icons/pi";

const methods = [
  {
    icon: <PiCirclesFour size={28} />,
    title: "01: Strategic Discovery",
    description: `We find out what numbers matter to your business first.\n\nMost design agencies worry too much about looks—we care about what helps your business grow.\n\nWe learn your key SaaS numbers on day one, so we can create designs that boost your profits, not just look pretty.`,
  },
  {
    icon: <PiClipboardText size={28} />,
    title: "02: Conversion Architecture",
    description: `We design easy paths that guide users right where you want them.\n\nNo random design choices, only solutions that help convert visitors to customers.\n\nWe create smooth user flows that show your value clearly and turn curious visitors into paying customers.`,
  },
  {
    icon: <PiSquaresFour size={28} />,
    title: "03: Pixel-Perfect Execution",
    description: `With years of experience, we create designs that developers love to work with.\n\nYou'll get results in days, not months, keeping your momentum going strong.\n\nOur files are set up for easy handoff to your team, helping you launch faster and save money.`,
  },
  {
    icon: <PiChartLineUp size={28} />,
    title: "04: Measure & Optimise",
    description: `We help track how well things work and make them better using real data.\n\nWe don’t just deliver and vanish—we stick with you as long as you want our help.\n\nYour conversion rates keep getting better, putting more money in your pocket with each update.`,
  },
];

const MVP = [
  {
    icon: <PiLightbulb size={28} />,
    title: "MVP",
    description: `Design that gets you to market faster and helps you attract investors. We focus on the core features that prove your idea works while setting you up for growth.

`,
  },
  {
    icon: <PiClipboardText size={28} />,
    title: "Seed",
    description: `Convert more users and lower churn rates. We help turn your key numbers green and make investors eager to fund your next growth phase.

`,
  },
  {
    icon: <PiSquaresFour size={28} />,
    title: "Growth",
    description: `Add features without breaking what works. We help you scale smoothly, improve revenue streams, and keep your growing user base happy.

`,
  },
];

function Method({ title, subtitle, Array }) {
  return (
    <section className="bg-black py-16 px-4 flex flex-col items-center gap-2 text-white text-center">
      <h2 className="text-4xl md:text-7xl w-3/4 text-center font-light mb-2">
        {title}
      </h2>
      <p className="text-purple-300 font-merriweather italic mb-12">
        {subtitle}
      </p>
      {Array === "Method" ? (
        <div className="flex flex-wrap justify-center gap-4">
          {methods.map((method, index) => (
            <MethodCard
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
              shadow={false}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-wrap justify-center gap-4">
          {MVP.map((method, index) => (
            <MethodCard
              key={index}
              icon={method.icon}
              title={method.title}
              description={method.description}
              shadow={false}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Method;
