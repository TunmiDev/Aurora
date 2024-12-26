import React from "react";
import background from "../../assets/bg.png";

const Hero = () => {
  return (
    <div>
      <div className="h-screen flex items-center bg-gradient-to-r from-blue-500 to-blue-300">
        {/* Left Section (Text Content) */}
        <div className="w-1/2 p-8 text-white">
          <h1 className="text-6xl font-bold mt-[-50px] pt-[-50px]">
            Welcome to <br /> Aurora's Kingdom!
          </h1>
          <p className="mt-4 text-xl">
            Here, you'll discover the playful and curious world of my beloved
            bird, Aurora. From her daily adventures to her charming quirks,
            Aurora's life is a delightful journey filled with love, mischief,
            and endless cuddles.
          </p>
          <button className="mt-6 px-4 py-2 flex items-center justify-center bg-secondary text-black rounded shadow hover:bg-pink-700 hover:text-white hover:underline">
            View Gallery
          </button>
        </div>

        {/* Right Section (Bird Image) */}
        <div className="w-1/2">
          <img
            src={background}
            alt="Bird"
            className="object-cover h-full w-full rounded-l-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
