import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useUser } from "../recoil/useUser";

export const useUserAPI = () => {
  const userId = 13; // TODO: 경우에 따라 바뀌도록 수정하기
  const { setUser } = useUser();

  const userAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get(`users/${userId}`);
      if (data) {
        setUser(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { userAPI };
};
