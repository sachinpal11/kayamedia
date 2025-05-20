import React from "react";
import Header from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";
import UiElement from "./components/ui/UiElement";
import Method from "./components/Method";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full text-white font-poppins text-xl bg-neutral-950">
      <Header />
      <UiElement />
      <Method />
    </div>
  );
}

export default App;
