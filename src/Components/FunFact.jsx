import React from "react";
import Fact from "../assets/fact.jpg";

const FunFact = () => {
  return (
    <div id="funFact">
      <div className="p-6">
        <div className="flex flex-col sm:flex-row items-center sm:items-start md:h-screen  sm:space-y-0 ">
          {/* Right Section (Text) */}
          <div className="w-full md:w-1/2 text-center md:text-left pl-6 sm:pl-12 md:pl-20">
            {" "}
            {/* Added padding-left */}
            <h2 className="text-3xl md:text-6xl font-bold text-blue-500">
              Fun Facts About
              <br />
              Aurora
            </h2>
            <p className="text-gray-500 text-lg sm:text-xl pt-6 sm:pt-8">
              Aurora isn't just any bird—she's the heart of our home. With her
              vibrant feathers, inquisitive eyes, and graceful demeanor, she
              truly lives up to her royal name. Whether she's perched by the
              window, chirping a tune, or playfully flitting around, Aurora
              fills our home with warmth and joy at every turn.
              <br />
              As a true feathered queen, she has her favorite spot (the sunniest
              corner) and reigns with a delicate yet confident presence. Her
              charming personality and affectionate nature make her the perfect
              companion, reminding us daily that love, like royalty, is
              timeless.
            </p>
          </div>
          {/* Left Section (Image) */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={Fact}
              alt="bird"
              className="object-cover h-96 w-96 md:h-96 md:w-96 rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFact;
