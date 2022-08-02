import axios from "axios";

export const baseUrl = "http://43.200.181.148";

export function getJWTHeader(accessToken) {
  //   const { accessToken } = useAccessToken();
  //   return { token: `Bearer ${user.token}` };
  return { "X-AUTH-TOKEN": `${accessToken}` };
}

const config = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
