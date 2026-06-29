import axios from "axios";

const API_KEY = import.meta.env.VITE_GNEWS_API_KEY;

export const fetchNews = async () => {
  try {
    const response = await axios.get(
      `https://gnews.io/api/v4/top-headlines?category=technology&lang=en&country=us&max=10&apikey=${API_KEY}`
    );

    return response.data.articles;
  } catch (error) {
    console.error("News API Error:", error);
    return [];
  }
};
