import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    //   flex-col positions the iems vertically,and since the div takes up the whole screen it places the items in the vertical center using justify-center and centers them horizontally using items-center
    <div className="bg-gradient-to-t from-white to bg-cyan-400 h-screen flex flex-col justify-center items-center">
      {/* lg:, md:,sm:, makes the textresponsive so when the screen gets smaller or bigger so does the text */}
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14  text-black">
        Chakra Cafe
      </h1>
      {/* py added the vertical padding to make the yellow rounded icon surround more space vertically, px added the horizontal padding to the rounded icon, rounded-full makes the div round, flex, items-center makes the word and shopping cart stay in the same horizontal line instead of stacking,  */}
      <Link
        to="/Menu"
        className="py-6 px-10 bg-cyan-300 shadow-lg rounded-full text-3xl hover:bg-cyan-100 transition duration-300 ease-in-out flex items-center animate-bounce"
      >
        Order Now
        <svg
          xmlns="http://www.w3.org/2000/svg"
          //   added the ml-4 to move the shopping cart element to right 1rem
          className="h-6 w-6 ml-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      </Link>
    </div>
  );
}

export default Hero;
