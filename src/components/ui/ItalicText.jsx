import React from "react";
import clsx from "clsx";

const allowedColors = {
  orange: "text-orange-400",
  red: "text-red-700",
  blue: "text-blue-700",
  white: "text-neutral-400",
  purple: "text-purple-300",
};

function ItalicText({ children, className, color = "purple" }) {
  const textColor = allowedColors[color] || allowedColors.orange;

  return (
    <span
      className={clsx(
        "font-merriweather text-xl font-thin",
        textColor,
        className
      )}
    >
      <i>{children}</i>
    </span>
  );
}

export default ItalicText;
