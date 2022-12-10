import React, { useState, useEffect } from 'react';
import ProductList from '../ProductList';
import Title from "../Title";
import './cart.css';
import { useForm } from "react-hook-form";
function Cart() {
    const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const { handleSubmit } = useForm();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isBought, setIsBought] = useState((localStorage.getItem('isBought')));

    React.useEffect(() => {
        window.addEventListener('storage', () => {
            setIsBought(JSON.parse(localStorage.getItem('isBought')) || false)   
        });
    }, [])

    useEffect(() => {
        if(isBought === true) {
            window.localStorage.setItem('isBought', false);
            setCart([]);
            window.localStorage.setItem('cart', JSON.stringify([]));
            setFirstName("");
            setLastName("");
        }
    }, []);

    const getTotalPrice = () => {
        return cart.reduce((curr,next) => curr = curr + next.price, 0);
    }

    const mapCart = () => {
        return cart.map((obj, index) => {
            console.log(obj)
            return ({
                    id: obj._id,
                    name: obj.name 
            })
        })
    }

    const onSubmit = () => {
        let fullCartObj = {
            firstName: firstName,
            lastName: lastName,
            totalPrice: getTotalPrice(),
            products: mapCart()
        }

        fetch('http://localhost:5000/sendCart', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify( fullCartObj )
        })
        .then((response) => {
            if(response.status === 200){
                console.log("SUCCESSS")
                window.localStorage.setItem('isBought', true);
            } else if(response.status === 400){
                console.log("SOMETHING WENT WRONG")
            }
        })
    }

    return (
        <div>
            {(cart.length === 0) ? 
                <Title name='You Have No Items' title="In Your Bag.."/>
            :
                <div>
                    <Title name="Shopping" title="Bag"/>
                    <ProductList products={cart} isInCart={true}></ProductList>
                
                    {isBought!=true ? 
                        <div className='form'>
                            <form id="submit_form" onSubmit={handleSubmit(onSubmit)}>
                                <div className='labels'>
                                    <input className='input' type="input" onChange={e => setFirstName(e.target.value)} value={firstName} placeholder="firstName" name="firstName" id='firstName' required />
                                    <input className='input' type="input" onChange={e => setLastName(e.target.value)} value={lastName} placeholder="lastName" name="lastName" id='lastName' required />
                                </div>
                                <input type="submit" value="Buy Now" className="bn3637 bn37" ></input>
                            </form>
                        </div>
                    : 
                        <Title name='Cart Saved' title="Successfully!"/>
                    }
                </div>
            }
        </div>
    );
}

export default Cart;