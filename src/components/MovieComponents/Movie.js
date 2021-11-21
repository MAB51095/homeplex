import React from "react";
import styles from "./styles/Movie.module.css";
import poster from "../../img/poster.jpg";
import { uri } from "../../Api/tmdbClient";

function Movie({ movie }) {
  const moviePoster =
    movie.poster_path != null ? uri.posterImageURL + movie.poster_path : poster;
  return (
    <div className={`${styles.movie}`}>
      <img
        src={moviePoster}
        className={`${styles.moviePoster}`}
        alt={movie.title}
      />
    </div>
  );
}

export default Movie;
