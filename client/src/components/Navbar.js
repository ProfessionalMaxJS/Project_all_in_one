import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/Logo.jpeg";

function Navbar({ handleToggle, isLoggedIn, setIsLoggedIn, setUserData }) {
  function handleSignOut() {
    fetch("/logout", {
      method: "DELETE",
    })
      .then((r) => r.json())
      .catch((err) => console.log(err))
      .then((data) => {
        console.log(data);
        setIsLoggedIn(false);
      });
  }

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
        {isLoggedIn ? (
          <Link className="p-4 flex" to="/" onClick={handleSignOut}>
            logout
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
          </Link>
        ) : (
          <Link className="p-4 flex" to="/SigninForm">
            login{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
              />
            </svg>
          </Link>
        )}
        {isLoggedIn ? (
          <Link className="p-4" to="/UserPg">
            Me
          </Link>
        ) : null}
        <Link className="p-2" to="/Menu">
          Menu
        </Link>
        <Link className="p-4" to="/Cart">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
