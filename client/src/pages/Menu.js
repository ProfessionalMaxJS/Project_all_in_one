import React from "react";
import { useState, useEffect } from "react";
import ItemCard from "../components/ItemCard";

function Menu() {
  const [bestSellers, setBestSellers] = useState(null);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((d) => {
        const tres = d.slice(0, 3);
        setBestSellers(d);
        console.log(d);
      });
  }, []);

  // grid grid-cols-3 gap-10

  return (
    <div className="bg-gradient-to-t from-white to bg-cyan-400 ">
      <div className=" pt-3 ml-3 grid lg:grid-cols-3 md:grid-cols-3 gap-3 rounded ">
        {bestSellers
          ? bestSellers.map((item) => {
              return <ItemCard key={item.id} item={item} />;
            })
          : []}
      </div>
    </div>
  );
}

export default Menu;
