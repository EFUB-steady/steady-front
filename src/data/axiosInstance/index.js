import axios, { AxiosRequestConfig } from "axios";
import { baseUrl } from "./constants";

export function getJWTHeader(user) {
  // return { Authorization: `Bearer ${user.token}` }
  // return { accesstoken: `${user.accessToken}` };
  return {
    accesstoken:
      "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJlZnViQGV3aGEuY29tIiwicm9sZXMiOiJVU0VSIiwiaWF0IjoxNjU5MDAzMDQxLCJleHAiOjE2NTkwMTM4NDF9.RDMMKPcLG46umE_RjlfRAlIWtWDsq6ptX0eNOiKwZ70",
  }; // userId==1
}

const config = {
  baseURL: baseUrl,
};

export const axiosInstance = axios.create(config);
