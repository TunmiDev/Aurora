import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-blue-300 to-blue-100">
        <h2 className="relative inset-x-0 top-3 text-4xl sm:text-3xl md:text-6xl font-bold text-black dark:text-white text-center">
          Contact Us
        </h2>

        {/* Container for Map and Form */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-start gap-8 w-full px-4">
          {/* Google Maps */}
          <div className="flex-1">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.846958497936!2d3.3749185739748824!3d6.5410022229618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8da734a9f3e9%3A0x262c8e61050a9774!2s25%20Omoalade%20Alafia%20St%2C%20Somolu%2C%20Lagos%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1735528704493!5m2!1sen!2sng"
              width="100%"
              height="450"
              className="border-0 rounded-md shadow-md"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <form className="bg-white p-6 rounded-md shadow-md">
              <div className="mb-4">
                <label
                  htmlFor="nameInput"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name:
                </label>
                <input
                  id="nameInput"
                  type="text"
                  placeholder="Enter your name..."
                  required
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="emailInput"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email:
                </label>
                <input
                  id="emailInput"
                  type="email"
                  placeholder="Enter your email..."
                  required
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phoneInput"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone Number:
                </label>
                <input
                  id="phoneInput"
                  type="tel"
                  placeholder="Enter your phone number..."
                  pattern="[0-9]{10}"
                  required
                  className="w-full border border-gray-300 rounded-md p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
