import React from "react";
import Header from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";
import UiElement from "./components/ui/UiElement";
import Method from "./components/Method";
import BentoGridSection from "./components/BentoGridSection";
import ServicesSection from "./components/ServicesSection";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full text-white font-poppins text-xl bg-neutral-950">
      <Header />
      <UiElement />
      <Method
        title={"The Haus method®"}
        subtitle={"Our proven process for turning visitors into customers"}
        Array={"Method"}
      />
      <Method
        title={"From MVP to unicorn: design that grows with you"}
        subtitle={
          "Solutions for wherever you are in your SaaS journey—and where you're going next"
        }
        Array={"MVP"}
      />
      <BentoGridSection />
      <ServicesSection />
    </div>
  );
}

export default App;
