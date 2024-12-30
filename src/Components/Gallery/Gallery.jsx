import React from "react";
import photo1 from "../../assets/photo1.jpg";
import photo2 from "../../assets/photo2.jpg";
import photo3 from "../../assets/photo3.jpg";
import photo4 from "../../assets/photo4.jpg";

const AuroraPhotos = () => {
  return (
    <div className="relative h-screen flex-col  bg-gradient-to-r from-blue-500 to-blue-300">
      {/* Text at the Top Center */}
      <div>
        <h1 className="relative inset-x-0 top-10 text-6xl sm:text-5xl font-bold text-black dark:text-white text-center ">
          Aurora's Photos
        </h1>
      </div>
      {/*Images*/}
      <div className=" flex  gap-9  items-center sm:flex-row justify-between inset-x-0  absolute mt-40 mx-12 ">
        <img src={photo1} alt="bird pic" className="rounded-lg h-64 w-64 " />
        <img src={photo2} alt="bird pic" className="rounded-lg h-64 w-64" />
        <img src={photo3} alt="bird pic" className="rounded-lg h-64 w-64" />
        <img src={photo4} alt="bird pic" className="rounded-lg h-64 w-64" />
      </div>
    </div>
  );
};

export default AuroraPhotos;
