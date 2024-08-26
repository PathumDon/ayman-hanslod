import axios from "axios";
import { ACCESS_TOKEN } from "../utils/constants";

const api = axios.create({
  baseURL: "http://161.35.101.255/",
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
