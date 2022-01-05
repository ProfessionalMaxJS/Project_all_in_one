import React from "react";
import ImageTwo from "../images/ocean-bagel.jpeg";
import { Link } from "react-router-dom";

function Memebership() {
  return (
    <>
      <div className=" ml-3 grid md:grid-cols-2 text-black ">
        <div className="border  flex flex-col justify-center items-center">
          <h1 className="mb-10 text-4xl">MyChakra+ Membership</h1>
          <p className="mb-5 text-2xl">Buy 10</p>
          <p className="mb-10  text-2xl">Get One Free</p>
          <Link
            to="/Signup"
            className="py-6 px-10 shadow-lg rounded-full text-3xl hover:bg-cyan-100 transition duration-300 ease-in-out flex items-center border border-black"
          >
            Join Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-4 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </Link>
        </div>
        <div className="border ">
          <img src={ImageTwo} alt="egg" className="rounded shadow  w-full" />
        </div>
      </div>
    </>
  );
}

export default Memebership;
