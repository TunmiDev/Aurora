import React from "react";

const Contact = () => {
  return (
    <div id="contact">
      <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-blue-300 to-blue-100">
        <h2 className="relative inset-x-0 top-3 text-4xl sm:text-3xl md:text-6xl font-bold text-black dark:text-white text-center">
          Contact Us
        </h2>

        {/* Container for Map and Form */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-8 w-full px-4 md:px-8">
          {/* Google Maps */}
          <div className="flex-1">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46310731795!2d3.1191424086628565!3d6.548369371686134!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1735770029764!5m2!1sen!2sng"
              className="w-full md:w-[600px] h-[300px] md:h-[450px]"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full max-w-lg self-center">
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
