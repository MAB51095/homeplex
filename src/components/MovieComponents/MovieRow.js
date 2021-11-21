import React, { useEffect, useState } from "react";
import tmdbClient from "../../Api/tmdbClient";
import Movie from "./Movie";
import styles from "./styles/MovieRow.module.css";

function MovieRow(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchTrending() {
      const request = await tmdbClient.get(props.uri);
      setMovies(request.data.results);
    }
    fetchTrending();
  }, [props.uri]);

  return (
    <div className={`${styles.row}`}>
      <h2>{props.name}</h2>
      <div className={`${styles.movieRow}`}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default MovieRow;
