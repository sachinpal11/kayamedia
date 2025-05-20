import React from "react";
import BentoCard from "./ui/BentoCard";

function BentoGridSection() {
  return (
    <div className="py-16 flex flex-col items-center px-4 md:px-20 bg-black text-white">
      <div className="text-center flex items-center flex-col mb-12">
        <h2 className="text-4xl xl:w-3/4 text-center md:text-7xl mb-4">
          Some numbers we’re proud of
        </h2>
        <p className="text-purple-200 font-merriweather italic">
          It’s not just about the pixels where we’re from
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-6 gap-6 w-full">
        {/* Top Row (2 cards spanning 3 columns each) */}
        <div className="md:col-span-3">
          <BentoCard
            logo={<span className="italic">Paramount+</span>}
            heading="35% Revenue Increase"
            description="Complete redesign of streaming experience across multiple platforms led by Jacob over a 3 month period, meeting tight timeline goals."
            gradient
          />
        </div>
        <div className="md:col-span-3">
          <BentoCard
            logo={<span className="italic">CreditOne</span>}
            heading="100% Stakeholder Buy-In"
            description="Jacob took the Credit One design system from 0-1 and made all the key decisions. Stakeholders were bought in 100% before the design system was fully built."
            gradient
          />
        </div>

        {/* Bottom Row (3 cards spanning 2 columns each) */}
        <div className="md:col-span-2">
          <BentoCard
            logo={<span>📝 Medium</span>}
            heading="Recognised Design Authority"
            description="Marc’s insights on design that converts have attracted over 72,000 followers on Medium, making him a trusted expert whose practical approaches are widely used."
          />
        </div>
        <div className="md:col-span-2">
          <BentoCard
            logo={<span>❤️ CVS Health</span>}
            heading="40% Efficiency Boost"
            description="Jacob’s design and strategic approach increased efficiency in CVS Health’s pharmacy system, resulting in a 40% boost."
          />
        </div>
        <div className="md:col-span-2">
          <BentoCard
            logo={<span>🏢 Cabana</span>}
            heading="Achieved Six-Figure SaaS Exit"
            description="Marc’s design approach helped build and scale a SaaS product that achieved a six-figure acquisition."
          />
        </div>
      </div>
    </div>
  );
}

export default BentoGridSection;
