import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="bg-gradient-to-t from-white to bg-cyan-400 h-screen flex flex-col justify-center items-center">
      <h1 className="lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14  text-black">
        Join MyChakra
      </h1>
      <h2 className="lg:text-xl md:text-lg sm:text-md text-sm font-mono italic mb-14  text-center text-black">
        When you join MyChakra, you’ll get rewards for your purchases and plenty
        of surprises too.
      </h2>
      <Link
        to="/SignupForm"
        className="py-6 px-10 bg-cyan-300 shadow-lg rounded-full text-3xl hover:bg-cyan-100 transition duration-300 ease-in-out flex items-center hover:animate-bounce"
      >
        Sign Up With Email
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-3"
          fill="none"
          viewBox="0 -2 21 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      </Link>
      <p className=" mt-3 text-sm font-mono italic mb-14  text-black">
        Already have an account?{" "}
        <Link to="/SigninForm" className="font-bold hover:text-cyan-400">
          Sign In
        </Link>
      </p>
    </div>
  );
}

export default Signup;
