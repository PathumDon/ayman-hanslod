import axios from "axios";

const API_URL = "http://user3.local:8000/api/fetch-all-data/"; //"https://mywebprofile.site/api/fetch-all-data/"; // Replace with your actual backend URL

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
