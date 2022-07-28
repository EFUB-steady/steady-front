import { axiosInstance, getJWTHeader } from "../../../../data/axiosInstance";

export const getMyStudy = async (user) => {
  const { data } = await axiosInstance.get("/studies/my-study", {
    headers: getJWTHeader(user),
  });

  // if (data[]) 에러처리???
};
