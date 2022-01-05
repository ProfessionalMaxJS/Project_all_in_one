import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "./ItemCard";

function Suggestions() {
  const [bestSellers, setBestSellers] = useState(null);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((d) => {
        const tres = d.slice(0, 3);
        setBestSellers(tres);
      });
  }, []);

  // console.log(bestSellers);
  // grid grid-cols-3 gap-10

  return (
    <>
      <div className="ml-3 mb-2 font-serif font-semi-bold xl:text-7xl lg:text-5xl sm:text-4xl text-2xl italic">
        You'll Definitely Love These...
      </div>
      <div className=" ml-3 grid lg:grid-cols-3 md:grid-cols-3 gap-3 ">
        {bestSellers
          ? bestSellers.map((item) => {
              return <ItemCard key={item.id} item={item} />;
            })
          : []}
      </div>
    </>
  );
}

export default Suggestions;
