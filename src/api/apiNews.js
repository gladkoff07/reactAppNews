import axios from "axios";

const BASE_API_URL = import.meta.env.VITE_API_URL;
const BASE_API_KEY = import.meta.env.VITE_API_KEY;

export const getNews = async () => {
  try {
    const response = await axios.get(`${BASE_API_URL}`, {
      params: {
        apiKey: BASE_API_KEY,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
