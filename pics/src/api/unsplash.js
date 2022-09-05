import axios from "axios";
import { apikey } from "./apikey";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${apikey()}`
  }
});
