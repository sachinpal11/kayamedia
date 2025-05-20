import React from "react";

function BentoCard({ logo, heading, description, gradient = false }) {
  return (
    <div
      className={`rounded-2xl px-10 py-10 text-white flex flex-col h-full gap-5 justify-between ${
        gradient
          ? "bg-gradient-to-br from-[#1f1f1f] to-[#110027]"
          : "bg-[#1a1a1a]"
      }`}
    >
      <div className="mb-4 text-2xl md:text-3xl">{logo}</div>
      <h3 className="text-3xl md:text-5xl font-medium text-amber-50 mb-2">
        {heading}
      </h3>
      <p className="text-lg font-medium text-neutral-400">{description}</p>
    </div>
  );
}

export default BentoCard;
