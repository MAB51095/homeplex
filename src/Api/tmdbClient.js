import axios from "axios";

export const API_KEY = "69dd7725fffd7b9e76777dd240ae3fc4";
const baseURL = "https://api.themoviedb.org/3";

export const uri = {
  bgImageURL: "https://image.tmdb.org/t/p/w780/",

  posterImageURL: "https://image.tmdb.org/t/p/w154/",

  youtubeURL: "https://www.youtube.com/watch?v=",

  fetchTrendingMovies: "/trending/movie/week?api_key=" + API_KEY,

  fetchTopRatedMovies:
    "/movie/top_rated?api_key=" + API_KEY + "&language=en-US&page=1",

  fetchPopularMovies:
    "/movie/popular?api_key=" + API_KEY + "&language=en-US&page=1",

  fetchUpcomingMovies:
    "/movie/upcoming?api_key=" + API_KEY + "&language=en-US&page=1",

  fetchPopularSeries:
    "/tv/popular?api_key=" + API_KEY + "&language=en-US&page=1",

  fetchTopRatedSeries:
    "/tv/top_rated?api_key=" + API_KEY + "&language=en-US&page=1",

  fetchMovieTrailerKey:
    "/movie/id/videos?api_key=" + API_KEY + "&language=en-US",
  fetchSeriesTrailerKey: "/tv/id/videos?api_key=" + API_KEY + "&language=en-US",
};

const tmdbClient = axios.create({
  baseURL,
});

export default tmdbClient;
