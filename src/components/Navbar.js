import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";
import menulogo from "../img/menu.svg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleButtonHandler = () => {
    setIsMobileMenuOpen((prev) => {
      return !prev;
    });
  };
  return (
    <>
      <button
        href="#"
        className={`${styles.toggleButton}`}
        onClick={toggleButtonHandler}
      >
        <img src={menulogo} alt="" />
      </button>
      <div
        className={`${styles.navbarLinks} ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        id="navbar-links"
      >
        <ul>
          <li>
            <span className={`${styles.a}`}>Home</span>
          </li>
          <li>
            <span className={`${styles.a}`}>Contact</span>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
