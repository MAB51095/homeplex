import React from "react";
import styles from "./styles/Carousel.module.css";
import poster from "../img/poster.jpg";

function Carousel() {
  return (
    <div className={`${styles.carousel}`}>
      <div className={`${styles.carouselItem}`}>
        <img className={`${styles.carouselItemImage}`} src={poster} alt="" />
        <div>Description</div>
      </div>
      <div className={`${styles.carouselItem}`}>
        <img className={`${styles.carouselItemImage}`} src={poster} alt="" />
        <div>Description</div>
      </div>
      <div className={`${styles.carouselItem}`}>
        <img className={`${styles.carouselItemImage}`} src={poster} alt="" />
        <div>Description</div>
      </div>
      <div className={`${styles.carouselItem}`}>
        <img className={`${styles.carouselItemImage}`} src={poster} alt="" />
        <div>Description</div>
      </div>
      <div className={`${styles.carouselItem}`}>
        <img className={`${styles.carouselItemImage}`} src={poster} alt="" />
        <div>Description</div>
      </div>
    </div>
  );
}

export default Carousel;
