import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.jpeg";

function Navbar({ handleToggle }) {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-cyan-400 text-black relative shadow-lg font-mono"
      role="navigation"
    >
      <Link to="/" className="pl-8 flex justify-between items-center">
        <img src={logo} alt="logo" className="h-10 rounded shadow" />
        <span className="ml-3 text-black">Chakra Cafe</span>
      </Link>
      <div className="px-4 cursor-pointer md:hidden" onClick={handleToggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>
      <div className="md:flex items-center pr-8 hidden">
        <Link className="p-4" to="/UserPg">
          Me
        </Link>
        <Link className="p-4" to="/Menu">
          Menu
        </Link>
        <Link className="p-4" to="/Contact">
          Contact
        </Link>
        <Link className="p-4" to="/Cart">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
</svg>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
