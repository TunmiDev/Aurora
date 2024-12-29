import React from "react";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";

const AuroraPhotos = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-500 to-blue-300">
      {/* Text at the Top Center */}
      <div>
        <h1 className="relative inset-x-0 top-10 text-6xl font-bold text-black dark:text-white text-center ">
          Aurora's Photos
        </h1>
      </div>
      {/*Images*/}
      <div className="w-64 h-64 flex  items-center justify-between inset-x-0 rounded-lg absolute mt-40">
        <img src={photo1} alt="bird pic" />
        <img src={photo2} alt="bird pic" />
        <img src={photo3} alt="bird pic" />
        <img src={photo4} alt="bird pic" />
      </div>
    </div>
  );
};

export default AuroraPhotos;
