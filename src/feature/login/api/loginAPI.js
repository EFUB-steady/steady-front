import { axiosInstance } from "../../../core/axiosInstance";

export const loginAPI = async (request) => {
  const { data } = await axiosInstance.post("users/login", request);
  return data;
};
