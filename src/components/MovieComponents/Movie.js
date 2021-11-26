import React, { useEffect, useState } from "react";
import styles from "./styles/Movie.module.css";
import poster from "../../img/poster.jpg";
import tmdbClient, { uri } from "../../Api/tmdbClient";

function Movie({ movie, type }) {
  const moviePoster =
    movie.poster_path != null ? uri.posterImageURL + movie.poster_path : poster;
  const [trailer, setTrailer] = useState("");

  const id = movie.id;

  useEffect(() => {
    const url = (
      type === "movie" ? uri.fetchMovieTrailerKey : uri.fetchSeriesTrailerKey
    ).replace("id", movie.id);

    async function getTrailer() {
      let keyRequest = await tmdbClient.get(url);

      console.log(keyRequest.data.results);

      setTrailer(
        uri.youtubeURL +
          keyRequest.data.results.filter(
            (m) => m.site === "YouTube" && m.type === "Trailer"
          )[0]?.key
      );
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
