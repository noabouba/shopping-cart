import React, { useState } from 'react';
import ProductList from '../ProductList.js';
import Title from "../Title";

function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    return (
        <div>
            <Title name="Your" title="Order"/>
            <ProductList products={cart} isInCart={true}></ProductList>
        </div>
    );
}

export default Cart;