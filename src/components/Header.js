import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import './Header.css'; // Import CSS for styling

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <h1>Banjara Fashion</h1>
            </div>
            <nav className="navbar">
                <ul className="nav-links">
                    <li><Link to="/">Home</Link></li> {/* Use Link for navigation */}
                    <li><Link to="/about">About</Link></li> {/* Link to About page */}
                    <li><Link to="/services">Services</Link></li> {/* Add Services link */}
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;