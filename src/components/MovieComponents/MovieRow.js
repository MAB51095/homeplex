import React, { useEffect, useState } from "react";
import tmdbClient, { uri } from "../../Api/tmdbClient";
import Movie from "./Movie";
import styles from "./styles/MovieRow.module.css";
import prev from "../../img/prev.svg";
import next from "../../img/next.svg";

function MovieRow(props) {
  const [movies, setMovies] = useState([]);

  const id = props.name.replace(/\s/g, "");
  useEffect(() => {
    async function fetchList() {
      const request = await tmdbClient.get(props.uri);

      let media = request.data.results;
      setMovies(media);
    }

    fetchList();
  }, [props.uri, props.type]);

  const scrollRow = (e) => {
    let isLeft = e.target.alt === "<" || e.target.className.includes("left");
    let x = 0.9;
    if (isLeft) {
      x *= -1;
    }
    const row = document.querySelector("#" + id);
    row.scrollBy(row.clientWidth * x, 0);
  };

  return (
    <div className={`${styles.row}`}>
      <h2>{props.name}</h2>
      <div id={id} className={`${styles.movieRow}`}>
        <button
          className={`${styles.scroll} ${styles.left}`}
          onClick={scrollRow}
        >
          <img src={prev} alt="<" />
        </button>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} type={props.type} />
        ))}
        <button
          className={`${styles.scroll}  ${styles.right}`}
          onClick={scrollRow}
        >
          <img src={next} alt=">" />
        </button>
      </div>
    </div>
  );
}

export default MovieRow;
