import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"
import logo from "./assets/pokeball.png";

const Navbar = () => {

    return (
        <header className='navbar'>
            {/* <nav class="navbar navbar-default navbar-fixed-top"></nav> */}
            <img className="logo" src={logo} alt="Site Logo" />
            <Link className="cta" to="/"><button>Contact</button></Link>
            <nav >
            <div className="container">
                <ul className="nav__links">
                    <li><Link to="/">Services</Link></li>
                    <li><Link to="/">Projects</Link></li>
                    <li><Link to="/">About</Link></li>
                </ul>
            </div>
            </nav>
        </header>
    )
}

export default Navbar