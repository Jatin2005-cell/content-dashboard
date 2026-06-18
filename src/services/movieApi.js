import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTrendingMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`
    );

    return response.data.results;
  } catch (error) {
    console.error("TMDB Error:", error);
    return [];
  }
};
console.log("TMDB KEY:", API_KEY);