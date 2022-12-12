import React, { useState, useEffect } from "react";
import ProductList from "../ProductList";
import Title from "../Title";
import UserForm from "./UserForm";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isBought, setIsBought] = useState(
    localStorage.getItem("isBought") === "true"
  );

  useEffect(() => {
    if (isBought) {
      window.localStorage.setItem("isBought", false);
      setIsBought(false);
    }
  }, []);

  const getTotalPrice = () => {
    return cart.reduce((curr, next) => (curr = curr + next.price), 0);
  };

  const mapCart = () => {
    return cart.map((obj, index) => {
      console.log(obj);
      return {
        id: obj._id,
        name: obj.name,
      };
    });
  };

  
    const handleSubmit = (first, last) => {
      let fullCartObj = {
        firstName: first,
        lastName: last,
        totalPrice: getTotalPrice(),
        products: mapCart(),
      };

      fetch("http://localhost:5000/sendCart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullCartObj),
      }).then((response) => {
        if (response.status === 200) {
          console.log("SUCCESSS");
          window.localStorage.setItem("isBought", true);
          window.localStorage.setItem("cart", JSON.stringify([]));
          setIsBought(true);
        } else if (response.status === 400) {
          console.log("SOMETHING WENT WRONG");
        }
      });
    };


  return (
    <div>
      {cart.length === 0 ? (
        <Title name="You Have No Items" title="In Your Bag.." />
      ) : (
        <div>
          <Title name="Shopping" title="Bag" />
          <ProductList products={cart} isInCart={true}></ProductList>

          {isBought != true ? (
            <div>
              <UserForm handleSubmit={handleSubmit}/>
              <Title name="Total Price:" title={getTotalPrice()+"$"}></Title>
            </div>
          ) : (
            <Title name="Cart Saved" title="Successfully!" />
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;