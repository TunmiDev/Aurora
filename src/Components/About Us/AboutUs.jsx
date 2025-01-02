import React from "react";
import About from "../../assets/About.jpg";

const AboutUs = () => {
  return (
    <div id="aboutUs">
      <div className="flex flex-col sm:flex-row items-center sm:items-start md:h-screen space-y-3 sm:space-y-0 mt-20">
        {/* Right Section (Image) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={About}
            alt="bird"
            className="object-cover h-96 w-96 md:h-96 md:w-96 rounded-lg"
          />
        </div>
        {/* Left Section (Text) */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-6xl font-bold text-blue-500">
            Her Royal Furriness:
            <br />
            Aurora's story
          </h2>
          <p className="text-gray-500 text-lg sm:text-xl pt-6 sm:pt-8">
            "Aurora is not just a bird, she's a little queen! I adopted her
            <br />
            when she was just a chick, and since then, she has taken <br />
            over my heart and home. With her soft fur and delicate <br />
            chirps, she rules with grace. Her favorite hobby? <br />
            Sunbathing by the window or chasing after shadows. <br />
            It's hard not to admire her playful yet regal personality."
          </p>
          <button className="mt-6 px-6 py-3 bg-gray-200 text-black rounded-full hover:bg-gray-800 hover:text-white dark:bg-gray-950 dark:text-white dark:hover:bg-white dark:hover:text-black duration-200">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
