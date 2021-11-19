import React from "react";
import Navbar from "./Navbar";
import styles from "./styles/Header.module.css";

function Header() {
  return (
    <div className={`${styles.header}`}>
      <div className={`${styles.brand}`}>
        <h1>homeplex</h1>
      </div>
      <Navbar />
    </div>
  );
}

export default Header;
