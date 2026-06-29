import axios from "axios";

export const fetchNews = async () => {
  try {
    const response = await axios.get(
      "https://dev.to/api/articles?per_page=12"
    );

    return response.data;
  } catch (error) {
    console.error("DEV.to API Error:", error);
    return [];
  }
};