import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
               <ul className="left">
                   <li><Link to="/">Bd Express</Link></li>
               </ul>

               <ul className="right">
                   <li>
                       <Link to="Cart">
                           <span className="shoppingCart"> <i className="fas fa-cart-plus"></i> <span
                               className="cartCount">0</span></span>
                       </Link>
                   </li>
               </ul>
        </nav>
    );
};

export default Navbar;