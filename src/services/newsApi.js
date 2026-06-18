import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const fetchNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${API_KEY}`
    );

    return response.data.articles;
  } catch (error) {
    console.error("News API Error:", error);
    return [];
  }
};