import React from "react";

const Contact = () => {
  return (
    <div className="p-6">
      <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-blue-300 to-blue-100">
        <h2 className="relative inset-x-0 top-3 text-4xl sm:text-3xl md:text-6xl font-bold text-black dark:text-white text-center">
          Contact Us
        </h2>

        <div className="mt-6 flex justify-center">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.846958497936!2d3.3749185739748824!3d6.5410022229618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8da734a9f3e9%3A0x262c8e61050a9774!2s25%20Omoalade%20Alafia%20St%2C%20Somolu%2C%20Lagos%20102216%2C%20Lagos!5e0!3m2!1sen!2sng!4v1735528704493!5m2!1sen!2sng"
            width="600"
            height="450"
            className="border-0 rounded-md shadow-md"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
