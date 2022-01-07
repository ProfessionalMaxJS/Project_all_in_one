import { useState, useEffect } from "react";
import SelectedItemCard from "./SelectedItemCard";
import { Link } from "react-router-dom";
function Cart({ setChange, images, tot, items, setItems, setCount, setTot }) {
  // const [items, setItems] = useState([]);
  // const [tot, setTot] = useState(0);
  // const [change, setChange] = useState(0);

  // useEffect(() => {
  //   fetch("/shoppingcart")
  //     .then((r) => r.json())
  //     .catch((err) => console.log(err))
  //     .then((data) => {
        // setItems(data);
        // let newData = data.map((d) => parseFloat(d.price));
        // console.log(newData);
        // setTot(newData.reduce((counter, nD) => (counter += nD)));
        // setTot(tot);
  //     });
  // }, []);

  function handlePurchase() {
    fetch("/purchase", {
      method: "DELETE",
    })
      .then((r) => r.json())
      .catch((err) => console.log(err))
      .then((data) => {
        // console.log(data)
        // setItems(data)
      // .then((d) => {
        setChange(Math.random());
        setItems([])
        setTot(0);
        setCount(0)
      });
  }
  // console.log(items);

  return (
    <div className="bg-gradient-to-t from-white to bg-cyan-400  flex-col justify-between items-center text-center">
      {items.length === 0 ? (
        <div className="lg:text-7xl md:text-5xl sm:text-3xl text-xl font-black pt-40 text-black animate-pulse hover:animate-none underline decoration-white cursor-pointer mb-10">
          <Link to="/Menu">Add Items Now</Link>
        </div>
      ) : (
        items.map((item) => {
          return (
            <div className="mx-auto px-2 py-2 container rounded">
              <SelectedItemCard
                // setCountu={setCountu}
                key={item.id}
                setChange={setChange}
                setCount={setCount}
                item={item}
                images={images}
                setItems={setItems}
                items={items}
                // setTot={setTot}
              />
            </div>
          );
        })
      )}
      {items.length > 0 ? (
        <>
          <div className=" text-3xl mx-auto container content-center border p-10 border-black underline-offset-1 decoration-green-300 rounded bg-black text-white font-bold">
            Total <span className="text-green-500">$</span>
            {tot}
          </div>
          <button
            className="text-white mt-10 mb-3 bg-green-700 rounded p-5 border hover:animate-pulse animate-bounce"
            onClick={handlePurchase}
          >
            Purchase
          </button>{" "}
        </>
      ) : null}
    </div>
  );
}

export default Cart;
