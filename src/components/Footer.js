import React from "react";
import styles from "./styles/Footer.module.css";

import react_logo from "../img/react.svg";
import firebase_logo from "../img/firebase.svg";
import github_logo from "../img/github.svg";
import iconscout_logo from "../img/iconscout.svg";

import tmdb_logo from "../img/tmdb.svg";

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      Built with
      <div className={`${styles.logos}`}>
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank">
          <img src={react_logo} alt="" />
        </a>
        <a href="https://firebase.google.com/" target="_blank">
          <img src={firebase_logo} alt="" />
        </a>
        <a href="https://github.com/MAB51095/homeplex" target="_blank">
          <img src={github_logo} alt="" />
        </a>
        <a href="https://developers.themoviedb.org/3" target="_blank">
          <img src={tmdb_logo} alt="" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
