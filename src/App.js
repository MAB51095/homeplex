import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import MovieRow from "./components/MovieComponents/MovieRow";
import { uri } from "./Api/tmdbClient";

function App() {
  return (
    <div className="App">
      <Header />
      <section className="Main">
        <Carousel />

        <section id="suggestions">
          <section id="movies">
            <MovieRow name="Popular Movies" uri={uri.fetchPopularMovies} />
            <MovieRow name="Top Rated Movies" uri={uri.fetchTopRatedMovies} />
            <MovieRow name="Upcoming Movies" uri={uri.fetchUpcomingMovies} />
          </section>
          <section id="series">
            <MovieRow name="Popular Series" uri={uri.fetchPopularSeries} />
            <MovieRow name="Top Rated Series" uri={uri.fetchTopRatedSeries} />
          </section>
        </section>
      </section>
      <Footer />
    </div>
  );
}

export default App;
