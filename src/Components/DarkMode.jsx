import React from "react";
import darkImg from "../assets/on.png";
import lightImg from "../assets/off.png";
const DarkMode = () => {
  return (
    <div className="relative">
      <img src={darkImg} alt="" />
      <img src={lightImg} alt="" />
    </div>
  );
};

export default DarkMode;
