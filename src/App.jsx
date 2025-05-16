import React from "react";
import Header from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full h-screen bg-neutral-950">
      <Header />
    </div>
  );
}

export default App;
