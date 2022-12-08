import React from "react";

import {
    Nav,
    NavLogo,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";

import {FaShoppingCart} from "react-icons/fa"

const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/">
                Shoes
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavBtn>
                    <NavBtnLink to="/details/2"><FaShoppingCart/></NavBtnLink>
                </NavBtn>
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;