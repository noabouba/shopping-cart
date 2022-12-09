import React, { useState } from 'react';
import Product from '../product/Product';
import './cart.css'

function Cart(props) {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    return (
        <div className="py-3">
            <h2 class="cart-title">Shopping Bag</h2>
            <div className="container">
                <div className="row">
                    { cart?.map(product =>{
                        console.log(product)
                        return <Product product={product} key={product._id} isInCart={props.isInCart}/>;
                    })
                    }
                </div>
            </div> 
        </div>
    );
}

export default Cart;