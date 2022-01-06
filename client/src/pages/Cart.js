import { useState, useEffect } from "react";
import SelectedItemCard from "./SelectedItemCard";
import { Link } from "react-router-dom";
function Cart({change, setChange}) {
  const [items, setItems] = useState([]);
  // const [change, setChange] = useState(0);

  useEffect(() => {
    fetch("/shoppingcart")
      .then((r) => r.json())
      .catch((err) => console.log(err))
      .then((data) => {
        setItems(data);
        let newData = data.map((d) => parseFloat(d.price));
        console.log(newData);
        let tot = newData.reduce((counter, nD) => (counter += nD));
        console.log(tot);
      });
  }, [change]);

  function handlePurchase() {
    fetch("/purchase", {
      method: "DELETE",
    })
      .then((r) => r.json())
      .catch((err) => console.log(err))
      .then((data) => console.log(data))
      .then(setChange(Math.random()))
  }

  return (
    <div className="bg-gradient-to-t from-white to bg-cyan-400  flex-col justify-between items-center text-center">
      {items === null ? (
        <div className="lg:text-7xl md:text-5xl sm:text-3xl text-xl font-black pt-40 text-black animate-pulse hover:animate-none underline decoration-white cursor-pointer">
          <Link to="/Menu">Add Items Now</Link>
        </div>
      ) : (
        items.map((item) => {
          return (
            <div className="mx-auto px-2 py-2 container rounded">
              <SelectedItemCard key={item.id} setChange={setChange} item={item} />
            </div>
          );
        })
      )}
      <button
        className="mt-20 text-2xl border bg-black text-white p-3"
        onClick={handlePurchase}
      >
        Purchase
      </button>
    </div>
  );
}

export default Cart;
