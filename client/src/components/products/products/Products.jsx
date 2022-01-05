import React, { useState, useEffect } from 'react'
import Product from './product/Product'

function Products() {
    const[items, setItems] = useState(null)
    
useEffect(() => {
    fetch('/items')
    .then(r=>r.json())
    .then((d) => setItems(d))}, [])
    
    console.log(items)
    // grid grid-cols-3 gap-10
    
    return (
        <div className='md:container md:mx-auto height-center border border-black grid grid-cols-3 gap-5'>
                {items? items.map((product) => {
                    return <Product key={product.id} p={product}/>
                }) : null}
        </div>
    )
}

export default Products