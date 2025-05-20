import React from "react";
import ItalicText from "./ui/ItalicText";
import Logo from "../assets/logo.png";
import Bookbtn from "./ui/Bookbtn";
import UiElement from "./ui/UiElement";

function Header() {
  return (
    <div className="w-full flex flex-col sm:justify-between items-center relative min-h-screen pb-10 px-4 sm:px-6">
      <img
        className="absolute z-1 top-0 w-full h-full object-cover"
        src="https://framerusercontent.com/images/OXiobgJxlSjjszCYhSacS7Hokn4.png"
        alt=""
      />
      <img
        src={Logo}
        className="w-40 sm:w-44 md:w-48 lg:w-52 mt-6 z-10"
        alt="Logo"
      />

      <div className="flex gap-6 sm:gap-8 md:gap-10 flex-col items-center justify-center text-center z-10">
        <ItalicText className={"sm:flex hidden"}>
          On-Demand Design & Dev • Senior Level Designers • One Simple
          Subscription
        </ItalicText>

        <h3 className="text-4xl sm:mt-0 mt-10 p-4 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium w-full sm:w-4/5 md:w-3/4">
          Design that converts, built by founders who get it
        </h3>

        <p className="w-full sm:w-3/4 md:w-2/4 text-lg sm:text-base md:text-lg">
          We combine enterprise design expertise with SaaS business experience
          to focus on what matters most - your metrics.
        </p>

        <Bookbtn />
      </div>
    </div>
  );
}

export default Header;
