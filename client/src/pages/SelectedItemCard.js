import React from "react";
import ImageOne from "../images/chakra-waffle.jpeg";
function SelectedItemCard({ item }) {
  return (
    <div className="  bg-black mx-auto flex justify-between items-center  shadow-lg rounded p-2">
      <img src={ImageOne} alt="egg" className="rounded" />
      <div className="  ml-2 bg-black h-fit w-screen border border-collapse rounded border-white">
        <h2 className="font-bold text-xl text-white mb-3 border">
          {item.name}
        </h2>
        <p className="text-white text-center italic mb-3 ">
          {item.description}
        </p>
        <p className="text-white text-center text-sm mb-3 ">
          <span className="text-green-400 mr-1">$</span>
          {item.price}
        </p>
        <button className="text-white mb-3 bg-red-500 rounded p-2 border hover:animate-pulse">
          Remove From Cart
        </button>
      </div>
    </div>
  );
}

export default SelectedItemCard;
