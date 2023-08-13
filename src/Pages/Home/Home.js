import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Donars from "./Donars";
import Gallery from "./Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Donars />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Home;
