import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useUser } from "../recoil/useUser";

export const useUserInfo = ({ onSuccess, onFail }) => {
  const userId = 1;
  const { setUser } = useUser();

  const userInfo = async () => {
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

  return { userInfo };
};
