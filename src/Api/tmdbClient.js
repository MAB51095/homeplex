import axios from "axios";

export const API_KEY = "69dd7725fffd7b9e76777dd240ae3fc4";
const baseURL = "https://api.themoviedb.org/3";

export const uri = {
  imageURL: "https://image.tmdb.org/t/p/w780/",
  fetchTrending: "/trending/all/week?api_key=" + API_KEY,
};

const tmdbClient = axios.create({
  baseURL,
});

export default tmdbClient;
