import axios from "axios";
import { baseUrl } from "../../../core/axiosInstance";

export const API = axios.create({
  baseURL: baseUrl,
});

export const accessTokenHeader = {
  "Content-Type": "application/json",
  "X-AUTH-TOKEN":
    "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZnViQGV3aGEuY29tIiwicm9sZXMiOiJVU0VSIiwiaWF0IjoxNjU5MzU1ODI5LCJleHAiOjE2NTkzNjY2Mjl9.udp0dlgYNxNqf1a1zcbHlNZEOAOXLh4rBlBQh1I4M1o",
};
