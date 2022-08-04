import axios from "axios";

export const baseUrl = "http://15.165.141.199";

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
