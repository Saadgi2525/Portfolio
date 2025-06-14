import axios from "axios";

// Create and configure the Axios instance
const apiClient = axios.create({
  baseURL: "http://localhost:5000/api", // Replace with your backend's base URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;