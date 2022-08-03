import { useState } from "react";
import { axiosInstance, getJWTHeader } from "../../../core/axiosInstance";
// import { useAccessToken } from "../../auth/recoil/useAuthState";
import { useUser } from "../recoil/useUser";

export const useUserInfo = () => {
  const userId = 1;

  const { user } = useUser();

  const [isLoading, setIsLoading] = useState(false);
  //   const { setAccessToken } = useAccessToken();
  // const { accessToken } = useAccessToken();
  const userInfo = async ({ onSuccess, onFail }) => {
    // try {
    //   const { data } = await axiosInstance.get(`users/${userId}`, {
    //     headers: getJWTHeader(accessToken),
    //   });
    //   if (data) {
    //     onSuccess && onSuccess();
    //     console.log("userInfo success");
    //   }
    // } catch (error) {
    //   onFail && onFail();
    //   console.log("userInfo fail");
    // }
  };

  return { userInfo };
};
