import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
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