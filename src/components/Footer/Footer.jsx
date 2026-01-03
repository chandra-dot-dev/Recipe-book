import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} <span>RecipeBook</span> — Made with ❤️ in the kitchen
      </p>
    </footer>
  );
};

export default Footer;
