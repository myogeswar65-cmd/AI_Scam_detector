import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-scam-detector-11.onrender.com",
});

export const predictScam = (text) =>
  API.post("/predict", { text });