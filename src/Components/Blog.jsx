import React from "react";
import vid1 from "../assets/vid1.mp4";
import vid2 from "../assets/vid2.mp4";
import vid3 from "../assets/vid3.mp4";
import vid4 from "../assets/vid4.mp4";

const AuroraPhotos = () => {
  return (
    <div id="blog">
      <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-blue-500 to-blue-300 ">
        {/* Text at the Top Center */}
        <div>
          <h1 className="relative inset-x-0 top-10 text-4xl sm:text-3xl md:text-6xl font-bold text-black dark:text-white text-center">
            Aurora's Blog
          </h1>
          <p className="relative inset-x-0 top-10 text-sm pt-6 sm:pt-8 text-black dark:text-white text-center">
            Welcome to Aurora's blog, where we share her latest adventures,
            chirps, and any new feathered wisdom she's discovered. <br />
            Whether it's mastering the art of mimicking sounds or exploring new
            spots to perch, there's never a dull moment in her world!
          </p>
        </div>
        {/* Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4  gap-6 mt-20 mx-auto max-w-screen-lg px-4">
          <video
            width="100%"
            controls
            autoPlay
            loop
            className="w-80 h-80 object-cover rounded-lg"
          >
            <source src={vid1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            width="100%"
            controls
            autoPlay
            loop
            className="w-80 h-80 object-cover rounded-lg"
          >
            <source src={vid2} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            width="100%"
            controls
            autoPlay
            loop
            className="w-80 h-80 object-cover rounded-lg"
          >
            <source src={vid3} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <video
            width="100%"
            controls
            autoPlay
            loop
            className="w-80 h-80 object-cover rounded-lg"
          >
            <source src={vid4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default AuroraPhotos;
