import React from "react";
import About from "../../assets/About.jpg";

const AboutUs = () => {
  return (
    <div>
      <div className="h-screen flex items-center relative">
        {/*right-section*/}
        <div className="w-1/2">
          <img
            src={About}
            alt="bird"
            className="object-cover h-96 w-96 rounded-lg  m-10"
          />
        </div>
        {/*left-section*/}
        <div className="w-1/2 ">
          <div class="flex items-center">
            <div>
              <h2 class="text-2xl font-bold mb-2 mt-6">
                Her Royal Furriness:Aurora's story
              </h2>
              <p>
                Princessa is not just a cat, she's little qeen! I adopted her
                when she was just a kitten, and since then, she has taken over
                my heart and home. With her soft fur and delicate meows, she
                rules with grace. Her favorite hobby? Sunbathing by the window
                or chasing after shadows—it’s hard not to admire her playful yet
                regal personality."
              </p>
              <button className="mt-6 px-4 py-2 flex items-center justify-center bg-gray-200 text-black rounded-full  hover:bg-gray-800 hover:text-white hover:underline dark:bg-gray-950 dark:text-white dark:hover:bg-white dark:hover:text-black duration-200">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
