import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Header component displays the navigation bar at the top of the page.
 * It includes links to different sections of the marketing page,
 * ensuring easy navigation for users.
 */
const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/features">Features</Link></li>
                    <li><Link to="/pricing">Pricing</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/faq">FAQ</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;