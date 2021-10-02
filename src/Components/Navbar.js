import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {CartContext} from "../Global/CartContext";

const Navbar = () => {
    const {qty} =useContext(CartContext) ;


    return (
        <nav>
               <ul className="left">
                   <li><Link to="/">Bd Express</Link></li>
               </ul>

               <ul className="right">
                   <li>
                       <Link to="Cart">
                           <span className="shoppingCart"><span className="margincls"><i className="fas fa-cart-plus "></i></span>  <span
                               className="cartCount">{qty}</span></span>
                       </Link>
                   </li>
               </ul>
        </nav>
    );
};

export default Navbar;