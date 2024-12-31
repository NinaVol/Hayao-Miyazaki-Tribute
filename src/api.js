import axios from "axios";

const API_URL = "http://www.omdbapi.com/";
const API_KEY = "54f365ae"; 

export const fetchMovie = async (title) => {
  try {
    const response = await axios.get(API_URL, {
      params: {
        apikey: API_KEY,
        t: title 
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching movie data:", error);
    return null;
  }
};
