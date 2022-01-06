import React, { useState } from "react";
import ImageOne from "../images/chakra-waffle.jpeg";
import { Link } from "react-router-dom";

function ItemCard({ item, setChange }) {
  // const [foodData, setFoodData] = useState({...item})

  function handleAddToCart() {
    console.log(item.id);
    fetch("/selected_items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ item_id: item.id /*, quantity_selected:qty*/ }),
    })
      .then((r) => r.json())
      .catch((err) => console.log(err))
      .then((data) => {
        console.log(data);
        setChange(Math.random());
      });
    // .then(setQty(1))
  }

  // const [qty, setQty] = useState(1)
  // function handleQty(e){
  //   setQty(e.target.value)
  //   console.log(e.target.value)
  // }

  const [shown, setIsShown] = useState(false);

  return (
    <div className="  bg-black mb-1 flex flex-col items-center shadow-lg rounded ">
      <img src={ImageOne} alt="egg" className="rounded" />
      <h2 className="font-bold text-xl text-white">{item.name}</h2>
      <p className="text-white text-center italic">{item.description}</p>
      <p className="text-white text-center text-sm">${item.price}</p>

      {/* <input value={qty} onChange={handleQty}  type="number" min="1" step="1"></input> */}

      <button
        onClick={handleAddToCart}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        // to="/SignupForm"
        className="mt-1 mb-1 py-1 px-5 bg-cyan-300 shadow-lg rounded-full text-xl hover:bg-cyan-200 transition duration-300 ease-in-out flex items-center justify-around"
      >
        <div className="hover:animate-pulse flex items-center justify-around">
          Add To Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 ml-3"
            fill={shown ? "green" : "none"}
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}

export default ItemCard;
