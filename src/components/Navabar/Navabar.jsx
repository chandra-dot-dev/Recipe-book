import React from "react";
import "./Navabar.css";

const Navabar = () => {
  return (
    <nav className="navbar">
      {/* LOGO SECTION */}
      <div className="logo">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2921/2921822.png"
          alt="recipe logo"
        />
        <h1>Recipe<span>Book</span></h1>
      </div>

      {/* NAV LINKS */}
      <ul className="nav-links">
        <li>Home</li>
        <li>Recipes</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navabar;
