import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useUser } from "../recoil/useUser";

export const useUserAPI = ({ onSuccess, onFail }) => {
  const userId = 1;
  const { setUser } = useUser();

  const userAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get(`users/${userId}`);
      if (data) {
        onSuccess && onSuccess();
        setUser(data);
      }
    } catch (error) {
      onFail && onFail();
    }
  };

  return { userAPI };
};
