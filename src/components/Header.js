import React from "react";
import Navbar from "./Navbar";
import styles from "./styles/Header.module.css";

function Header() {
  const clickHandler = () => {
    let off = document.querySelector("#Header").clientHeight;
    let pos = document.querySelector("#Home")?.getBoundingClientRect().y;
    window.scrollBy(0, pos - off);
  };
  return (
    <div id="Header" className={`${styles.header}`}>
      <div className={`${styles.brand}`} onClick={clickHandler}>
        <h1 className={`${styles.h1}`}>homeplex</h1>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
