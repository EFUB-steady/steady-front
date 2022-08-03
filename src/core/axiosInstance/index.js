import axios from "axios";

export const baseUrl = "http://43.200.181.148";

export const axiosInstanceHeader = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
    "X-AUTH-TOKEN": localStorage.getItem("accessToken"),
  },
});

const config = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
