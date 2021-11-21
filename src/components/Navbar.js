import React, { useState } from "react";
import styles from "./styles/Navbar.module.css";
import menulogo from "../img/menu.svg";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleButtonHandler = (event) => {
    setIsMobileMenuOpen((prev) => {
      return !prev;
    });

    event.preventDefault();

    let to = event.target.text;
    let off = document.querySelector("#Header").clientHeight;
    let loc = document.querySelector(`#${to}`)?.getBoundingClientRect().y;

    window.scrollBy(0, loc - off);
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
        className={`${styles.navbarLinks}  ${
          isMobileMenuOpen ? styles.active : ""
        }`}
        id="navbar-links"
      >
        <ul>
          <li>
            <a href="#" className={`${styles.a}`} onClick={toggleButtonHandler}>
              Home
            </a>
          </li>
          <li>
            <a
              href="#movies"
              className={`${styles.a}`}
              onClick={toggleButtonHandler}
            >
              Movies
            </a>
          </li>
          <li>
            <a
              href="#series"
              className={`${styles.a}`}
              onClick={toggleButtonHandler}
            >
              Series
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
