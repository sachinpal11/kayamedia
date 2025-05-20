import React from "react";

function MethodCard({ icon, title, description, shadow }) {
  return (
    <div
      className={`bg-gradient-to-b from-[#1f1f1f] to-[#110027] text-white p-6 rounded-xl border border-neutral-800 w-full md:w-[20%] min-w-[250px] ${
        shadow ? "shadow-lg shadow-[#9d4edd40]" : ""
      }`}
    >
      <div className="text-2xl mb-4">{icon}</div>
      <h3 className="text-lg text-start font-medium mb-2">{title}</h3>
      <p className="text-sm text-start text-neutral-400 whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}

export default MethodCard;
