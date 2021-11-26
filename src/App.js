import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MovieRow from "./components/MovieComponents/MovieRow";
import { uri } from "./Api/tmdbClient";
import YouTube from "react-youtube";

function App() {
  return (
    <div className="App">
      <Header />
      <section id="Home" className="Main">
        <Carousel />

        <section id="suggestions">
          <section id="Movies">
            <MovieRow
              type="movie"
              name="Popular Movies"
              uri={uri.fetchPopularMovies}
            />
            <MovieRow
              type="movie"
              name="Top Rated Movies"
              uri={uri.fetchTopRatedMovies}
            />
            <MovieRow
              type="movie"
              name="Upcoming Movies"
              uri={uri.fetchUpcomingMovies}
            />
          </section>
          <section id="Series">
            <MovieRow
              type="series"
              name="Popular Series"
              uri={uri.fetchPopularSeries}
            />
            <MovieRow
              type="series"
              name="Top Rated Series"
              uri={uri.fetchTopRatedSeries}
            />
          </section>
        </section>
      </section>

      <Footer />
    </div>
  );
}

export default App;
