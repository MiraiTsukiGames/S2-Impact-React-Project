import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import brand from "../../assets/img/logo.png";

const Navbar = () => {
  // State to track if the sidebar is open or not
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    /*navbar section*/
    <nav>
    {/*brand section*/}
      <div className="brand">
        <img src={brand} alt="logo" className="brand-name" />
        <p className="brand-text">Borcelle Yoga Studio</p>
      </div>
      {/*hamburger button*/}
      <button
        title="hamburger-menu"
        className="hamburger"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
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
      {/*sidebar menu*/}
      <div className={`navbar-sidebar ${isSidebarOpen ? "open" : ""}`}>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/timer">Timer</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
