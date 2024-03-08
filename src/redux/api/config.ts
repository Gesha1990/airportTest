import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://aerodatabox.p.rapidapi.com/",
  timeout: 1000,
  headers: {
    "X-RapidAPI-Key": "4559c701f4msh1a4f85efcbaf3d6p1ee90ejsn42c079116c11",
    "X-RapidAPI-Host": "aerodatabox.p.rapidapi.com"
  }
});
export default axiosInstance;
