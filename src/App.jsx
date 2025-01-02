import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Hero from "./Components/Hero Section/Hero";
import Navbar from "./Components/Navbar/Navbar";
import AboutUs from "./Components/About Us/AboutUs";
import Gallery from "./Components/Gallery/Gallery";
import FunFact from "./Components/FunFact";
import Blog from "./Components/Blog";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      {/* Full Website Layout: All sections are shown here */}
      <div>
        <Hero />
        <AboutUs />
        <Gallery />
        <FunFact />
        <Blog />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
