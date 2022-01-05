import React from "react";
import { Link } from "react-router-dom";

function Dropdown({ isOpen, handleToggle }) {
  return (
    <div
      className={
        isOpen
          ? "grid grid-rows-4 text-center items-center bg-cyan-300 outline outline-2"
          : "hidden"
      }
      onClick={handleToggle}
    >
      <Link className="p-4 outline outline-1" to="/">
        Home
      </Link>
      <Link className="p-4 outline outline-1" to="/menu">
        Menu
      </Link>
      <Link className="p-4 outline outline-1" to="/contact">
        Contact
      </Link>
    </div>
  );
}

export default Dropdown;
