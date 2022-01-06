import {useEffect} from 'react'

function Cart(){

    useEffect(() => {
        fetch("/shoppingcart")
        .then(r=>r.json())
        .catch(err => console.log(err))
        .then(data => console.log(data))
    }, []);

    function handlePurchase(){
        fetch("/purchase", {
            method: "DELETE"})
            .then(r => r.json())
            .catch(err => console.log(err))
            .then(data => console.log(data))}

    return(
    <>
    <button onClick={handlePurchase}>Purchase</button>
    <h1>testing</h1>
        </>
    )
}

export default Cart;