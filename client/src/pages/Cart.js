import {useState, useEffect} from 'react'

function Cart(){

    const [total, setTotal] = useState(0)
    useEffect(() => {
        fetch("/shoppingcart")
        .then(r=>r.json())
        .catch(err => console.log(err))
        .then(data => {console.log(data)
            let newData = data.map(d=>parseFloat(d.price))
            console.log(newData)
            let tot = newData.reduce((counter, nD)=>counter+=nD)
            console.log(tot)})
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