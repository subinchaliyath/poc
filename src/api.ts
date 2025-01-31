import axios from "axios";

const api = axios.create({
  baseURL: "https://api.example.com", // Replace with actual API base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
