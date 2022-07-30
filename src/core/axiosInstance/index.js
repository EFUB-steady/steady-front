import axios from "axios";

export const baseUrl = "http://43.200.181.148";

export function getJWTHeader(user) {
  //   return { token: `Bearer ${user.token}` };
  return { token: `${user.token}` };
}

const config = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
