import React, { useState } from 'react';
import ProductList from '../ProductList.js';

function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    return (
        <div>
            <ProductList products={cart} isInCart={true}></ProductList>
        </div>
    );
}

export default Cart;