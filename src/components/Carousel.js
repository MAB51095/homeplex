import React, { useEffect, useState } from "react";
import styles from "./styles/Carousel.module.css";

import prev from "../img/prev.svg";
import next from "../img/next.svg";
import tmdbClient, { uri } from "../Api/tmdbClient";
import { useSwipeable } from "react-swipeable";

import star from "../img/star.svg";

function Carousel() {
  const [carouselItems, setCarouselItems] = useState("");
  const [currentItemIndex, setCurrentItemIndex] = useState("");

  const trendingUrl = uri.fetchTrending;

  useEffect(() => {
    async function fetchTrending() {
      const request = await tmdbClient.get(trendingUrl);
      setCarouselItems(request.data.results);
      console.log(request.data.results);
    }
    fetchTrending();
    setCurrentItemIndex(0);
  }, [trendingUrl]);

  const nextItem = () => {
    if (currentItemIndex === carouselItems.length - 1) {
      setCurrentItemIndex(0);
    } else {
      setCurrentItemIndex((prev) => {
        return prev + 1;
      });
    }
  };

  const prevItem = () => {
    if (currentItemIndex === 0) {
      setCurrentItemIndex(carouselItems.length - 1);
    } else {
      setCurrentItemIndex((prev) => {
        return prev - 1;
      });
    }
  };

  const setCurrentSlide = (e) => {
    let isNext = e.target.alt === ">" || e.target.className.includes("next");

    if (isNext) {
      nextItem();
    } else {
      prevItem();
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextItem,
    onSwipedRight: prevItem,
  });

  return (
    <div {...swipeHandlers} className={`${styles.carousel}`}>
      <button className={`${styles.prev}`} onClick={setCurrentSlide}>
        <img src={prev} alt="<" />
      </button>

      <div className={`${styles.carouselItem} glass`}>
        <img
          className={`${styles.carouselItemImage} ${styles.fade}`}
          src={uri.imageURL + carouselItems[currentItemIndex]?.backdrop_path}
          alt=""
        />

        <div className={`${styles.carouselItemDetails}`}>
          <h1>{carouselItems[currentItemIndex]?.title}</h1>
          <span>
            <img
              className={`${styles.star}`}
              src={star}
              alt={carouselItems[currentItemIndex]?.vote_average}
            />
            {carouselItems[currentItemIndex]?.vote_average}{" "}
          </span>
        </div>
      </div>
      <button className={`${styles.next}`} onClick={setCurrentSlide}>
        <img src={next} alt=">" />
      </button>
    </div>
  );
}

export default Carousel;
