import React, { useEffect, useState } from "react";
import styles from "./styles/Carousel.module.css";
import poster from "../img/poster.jpg";
import prev from "../img/prev.svg";
import next from "../img/next.svg";
import tmdbClient, { uri } from "../Api/tmdbClient";

import react_logo from "../img/react.svg";
import firebase_logo from "../img/firebase.svg";
import github_logo from "../img/github.svg";
import iconscout_logo from "../img/iconscout.svg";
import tmdb_logo from "../img/tmdb.svg";

function Carousel() {
  const [carouselItems, setCarouselItems] = useState("");
  const [currentItemIndex, setCurrentItemIndex] = useState("");

  const trendingUrl = uri.fetchTrending;

  useEffect(() => {
    async function fetchTrending() {
      const request = await tmdbClient.get(trendingUrl);
      setCarouselItems(request.data.results);
      return request.data.results;
    }
    fetchTrending();
    setCurrentItemIndex(0);
  }, [trendingUrl]);

  const setCurrentSlide = (e) => {
    if ((e.target.value = ">")) {
      if (currentItemIndex === carouselItems.length - 1) {
        setCurrentItemIndex(0);
      } else {
        setCurrentItemIndex((prev) => {
          return prev + 1;
        });
      }
    } else {
      if (currentItemIndex === 0) {
        setCurrentItemIndex(carouselItems.length);
      } else {
        setCurrentItemIndex((prev) => {
          return prev - 1;
        });
      }
    }
  };

  return (
    <div className={`${styles.carousel}`}>
      <button className={`${styles.next}`} onClick={setCurrentSlide}>
        <img src={prev} alt="<" />
      </button>

      <div className={`${styles.carouselItem} glass`}>
        <img
          className={`${styles.carouselItemImage} ${styles.fade}`}
          src={uri.imageURL + carouselItems[currentItemIndex]?.backdrop_path}
          alt=""
        />

        <div>{carouselItems[currentItemIndex]?.title}</div>
      </div>
      <button className={`${styles.prev}`} onClick={setCurrentSlide}>
        <img src={next} alt=">" />
      </button>
    </div>
  );
}

export default Carousel;
