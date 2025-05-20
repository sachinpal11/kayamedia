import React from "react";
import UiCircle from "../../assets/Uicircle.png";
function UiElement() {
  return (
    <div>
      <img
        src={UiCircle}
        className="scale-150 sm:scale-110 xl:scale-100"
        alt=""
      />
    </div>
  );
}

export default UiElement;
