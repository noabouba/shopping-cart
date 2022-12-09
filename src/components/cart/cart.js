import React, { useState } from 'react';
import ProductList from '../ProductList';
import Title from "../Title";
import './cart.css';

function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const isBought = false;

    const sendToCart = () => {
        fetch('localhost:5000/sendCart', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ cart })
        })
        .then(cart => {
            res.send("cart saved!");
            isBought = true;
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        })
    }

    return (
        <div>
            <Title name="Shopping" title="Bag"/>
            {(cart.length === 0) ? <div className="mx-auto text-center">The cart is empty.</div> :
                <ProductList products={cart} isInCart={true}></ProductList>
            }
            {!isBought && (cart.length!=0) ? 
                <a  onClick={sendToCart} class="bn3637 bn37" >Buy Now</a>
                    : 
                <div> Cart Saved Successfully! </div>
            }
        </div>
    );
}

export default Cart;