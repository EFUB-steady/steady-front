import axios from "axios";
import { baseUrl } from "./constants";

export function getJWTHeader(user) {
  //   return { token: `Bearer ${user.token}` };
  return { token: `${user.token}` };
}

const config = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
