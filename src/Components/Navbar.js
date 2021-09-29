import React from 'react';

const Navbar = () => {
    return (
        <nav>
            <ul className="left">
                <li><a href="">Bd Express</a></li>
            </ul>

            <ul className="right">
                <li>
                    <a href="">
                        <span className="shoppingCart"> <i class="fas fa-cart-plus"></i> <span className="cartCount">0</span></span>
                    </a>
                </li>
            </ul>
            
        </nav>
    );
};

export default Navbar;