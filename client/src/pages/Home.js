import React from "react";
import Hero from "../components/Hero";
import Suggestions from "../components/Suggestions";
import Memebership from "../components/Memebership";

function Home({ images }) {
  return (
    <>
      <Hero />

      <Suggestions images={images} />
      <div className="h-full bg-gradient-to-b from-white to-cyan-400 ">
        <Memebership />
      </div>
    </>
  );
}

export default Home;
