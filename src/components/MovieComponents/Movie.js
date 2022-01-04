import React, { useEffect, useState } from "react";
import styles from "./styles/Movie.module.css";
import poster from "../../img/poster.jpg";
import tmdbClient, { uri } from "../../Api/tmdbClient";
import { getTrailerKey } from "../../Helper/trailerHelper";

function Movie({ movie, type }) {
  const moviePoster =
    movie.poster_path != null ? uri.posterImageURL + movie.poster_path : poster;

  const id = movie.id;

  const showTrailer = async () => {
    let trailer = await getTrailerKey(id, type);
    window.open(trailer, "_blank");
  };

  return (
    <div className={`${styles.movie}`}>
      <img
        src={moviePoster}
        className={`${styles.moviePoster}`}
        alt={movie.title}
        onClick={showTrailer}
      />
    </div>
  );
}

export default Movie;
