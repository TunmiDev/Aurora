import React from "react";
import "./App.css";
import Hero from "./Components/Hero Section/Hero";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/About Us/AboutUs";
import Gallery from "./Components/Gallery/Gallery";
import FunFact from "./Components/FunFact";
import Blog from "./Components/Blog";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Gallery />
      <FunFact />
      <Blog />
    </div>
  );
}

export default App;
