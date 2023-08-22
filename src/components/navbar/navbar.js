import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import Meditation from "../../assets/img/logo.png";

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation">
      <img src={Meditation} alt="Logo" className="brand-name" />
      <p>Borcelle Yoga Studio</p>
      <button
        className="hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
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
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/timer">Timer</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
