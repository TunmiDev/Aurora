import React from "react";
import background from "../../assets/bg.png";

const Hero = () => {
  return (
    <div id="hero">
      <div className="h-screen flex items-center bg-gradient-to-r from-blue-500 to-blue-300">
        {/* Left Section (Text Content) */}
        <div className="w-full sm:w-1/2 p-8 text-black dark:gray-950 dark:text-white duration-200">
          <h1 className="text-3xl font-bold mt-12 sm:mt-[-50px] pt-0 sm:pt-[-50px] sm:text-6xl">
            Welcome to Aurora's Kingdom!
          </h1>
          <p className="mt-4 text-xl">
            Here, you'll discover the playful and curious world of my beloved
            bird, Aurora. From her daily adventures to her charming quirks,
            Aurora's life is a delightful journey filled with love, mischief,
            and endless cuddles.
          </p>

          <button class="mt-3 px-4 py-2 sm:px-6 sm:py-3 sm:mt-6 sm:mb-6 bg-gray-200 text-black rounded-full hover:bg-gray-800 hover:text-white dark:bg-gray-950 dark:text-white dark:hover:bg-white dark:hover:text-black duration-200">
            View Gallery
          </button>
        </div>

        {/* Right Section (Bird Image) */}
        <div className="w-full sm:w-1/2">
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
