import React, { useState, useEffect } from "react";
import ProductList from "../ProductList";
import Title from "../Title";
import "./cart.css";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  const [isBought, setIsBought] = useState(
    localStorage.getItem("isBought") === "true"
  );

  useEffect(() => {
    if (isBought === true) {
      window.localStorage.setItem("isBought", false);
      setCart([]);
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

  function UserForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const handleSubmit = () => {
      let fullCartObj = {
        firstName: firstName,
        lastName: lastName,
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
      <div className="form">
        <form id="submit_form">
          <div className="labels">
            <input
              className="input"
              type="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="firstName"
              name="firstName"
              id="firstName"
              required
            />
            <input
              className="input"
              type="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="lastName"
              name="lastName"
              id="lastName"
              required
            />
          </div>
          <input type="submit" value="Buy Now" className="bn3637 bn37" onClick={e=>{e.preventDefault(); handleSubmit()} }></input>
        </form>
        <Title name="Total Price:" title={getTotalPrice()}></Title>
      </div>
    );
  }

  return (
    <div>
      {cart.length === 0 ? (
        <Title name="You Have No Items" title="In Your Bag.." />
      ) : (
        <div>
          <Title name="Shopping" title="Bag" />
          <ProductList products={cart} isInCart={true}></ProductList>

          {isBought != true ? (
            <UserForm />
          ) : (
            <Title name="Cart Saved" title="Successfully!" />
          )}
        </div>
      )}
    </div>
  );
}

export default Cart;