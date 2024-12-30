import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Submitted:");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="p-6">
      <div className="relative min-h-screen flex flex-col bg-gradient-to-r from-blue-300 to-blue-100">
        <h2 className="relative inset-x-0 top-3 text-4xl sm:text-3xl md:text-6xl font-bold text-black dark:text-white text-center">
          Contact Us
        </h2>

        <div className="mt-6 flex justify-center w-full md:w-1/2  ">
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

        <div className="mt-6 flex justify-center w-full md:w-1/2">
          <form onSubmit={handleSubmit}>
            {/* Step 3: Input fields */}
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
