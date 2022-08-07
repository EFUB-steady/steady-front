import axios from "axios";

export const baseUrl = "https://steadyday.shop";

export const axiosInstanceHeader = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "X-AUTH-TOKEN": localStorage.getItem("accessToken"),
    "Access-Control-Allow-Origin": "*",
  },
});

const config = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
