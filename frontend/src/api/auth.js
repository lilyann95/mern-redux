import axios from "axios";

const API = axios.create({
  baseURL:
    import.meta.env.VITE_API_URL_AUTH || "http://localhost:4000/api/auth",
});

export const login = (user) => API.post("/login", user);
export const register = (user) => API.post("/register", user);
