import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Menu from "./components/Menu/Menu";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Contact />
    </div>
  );
}

export default App;
