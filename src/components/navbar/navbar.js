import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");


  return (
    <nav  className="navigation">
        <Link to="/" className="brand-name">
          Website
        </Link>
        <button className="hamburger" onClick={() => setIsNavExpanded(!isNavExpanded)}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          viewBox="0 0 20 20" 
          fill="white" 
        > 
          <path 
            fillRule="evenodd" 
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" 
            clipRule="evenodd" 
          /> 
          </svg> 
        </button>
        <div className={isNavExpanded ? "menu-expanded" : "navigation-menu"}> 
        <ul className="menu-list">
          <li className={activeItem === "Home" ? "active" : ""}>
            <Link
              to="/"
              onClick={() => setActiveItem("Home")}
            >
              Home
            </Link>
          </li>
          <li className={activeItem === "Timer" ? "active" : ""}>
            <Link
              to="/timer"
              onClick={() => setActiveItem("Timer")}
            >
              Timer
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;






