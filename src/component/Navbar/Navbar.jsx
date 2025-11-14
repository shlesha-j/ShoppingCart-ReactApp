import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import { useSelector } from 'react-redux'



function Navbar() {
    // const cartCount = useSelector((state) => state.cart.cartItems.length);
    const cartCount = useSelector((state) =>
    state.cart.cartItems.reduce((total, item) => total + item.quantity, 0));

    
    return (
        <nav>
            <div className="container">
                <ul className='nav-links'>
                    <li>
                        <NavLink to="/" className="navlink">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus" className="navlink">About US</NavLink>
                    </li>
                    <li>
                        {
                            cartCount > 0 && <span className='cart-item'>{cartCount}</span>
                        }
                        <NavLink to="/cart" className="navlink">Cart</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="navlink">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar