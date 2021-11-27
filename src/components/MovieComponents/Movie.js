import React, { useEffect, useState } from "react";
import styles from "./styles/Movie.module.css";
import poster from "../../img/poster.jpg";
import tmdbClient, { uri } from "../../Api/tmdbClient";
import { getTrailerKey } from "../../Helper/trailerHelper";

function Movie({ movie, type }) {
  const moviePoster =
    movie.poster_path != null ? uri.posterImageURL + movie.poster_path : poster;
  const [trailer, setTrailer] = useState("");

  const id = movie.id;

  useEffect(() => {
    async function getTrailer() {
      let trailer = await getTrailerKey(id, type);
      setTrailer(trailer);
    }
    getTrailer();
  }, [id, type]);

  return (
    <div className={`${styles.movie}`}>
      <a href={trailer} target="_blank">
        <img
          src={moviePoster}
          className={`${styles.moviePoster}`}
          alt={movie.title}
        />
      </a>
    </div>
  );
}

export default Movie;
