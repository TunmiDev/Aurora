import React from "react";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";

const AuroraPhotos = () => {
  return (
    <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-blue-300 ">
      {/* Text at the Top Center */}
      <div>
        <h1 className="relative inset-x-0 top-10 text-4xl sm:text-3xl md:text-6xl font-bold text-black dark:text-white text-center">
          Aurora's Photos
        </h1>
      </div>
      {/* Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-20 mx-auto max-w-screen-lg px-4">
        <img
          src={photo1}
          alt="bird pic"
          className="w-80 h-80 object-cover rounded-lg"
        />
        <img
          src={photo2}
          alt="bird pic"
          className="w-80 h-80 object-cover rounded-lg"
        />
        <img
          src={photo3}
          alt="bird pic"
          className="w-80 h-80 object-cover rounded-lg"
        />
        <img
          src={photo4}
          alt="bird pic"
          className="w-80 h-80 object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default AuroraPhotos;
