import React, { useState } from "react";
import "./cart.css";

export default function UserForm(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
      <div className="form">
        <form id="submit_form">
          <div className="labels">
            <input
              className="input"
              type="input"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
              name="firstName"
              id="firstName"
              required
            />
            <input
              className="input"
              type="input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
              name="lastName"
              id="lastName"
              required
            />
          </div>
          <input type="submit" value="Buy Now" className="bn3637 bn37" onClick={e=>{e.preventDefault(); props.handleSubmit(firstName, lastName)} }></input>
        </form>
      </div>
    );
  }
