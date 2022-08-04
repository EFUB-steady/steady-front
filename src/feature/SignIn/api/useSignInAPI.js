import { axiosInstance } from "../../../core/axiosInstance";
import { useSignIn } from "../recoil/useSignIn";
import { useState } from "react";

export const useSignInAPI = () => {
  const {
    name: inputName,
    nickname: inputNickName,
    email: inputEmail,
    password: inputPassWord,
    phone: inputPhone,
  } = useSignIn();

  const [isLoading, setIsLoading] = useState(false);

  const signin = async ({ onSuccess, onFail }) => {
    setIsLoading(true);

    try {
      const data = await axiosInstance.post("users/signup", {
        name: inputName,
        nickname: inputNickName,
        email: inputEmail,
        password: inputPassWord,
        phone: inputPhone,
      });

      if (data) {
        onSuccess && onSuccess();
        if (data.data.token)
          localStorage.setItem("accessToken", data.data.token);
        if (localStorage.getItem("accessToekn")) setIsLoading(true);
      }
    } catch (error) {
      onFail && onFail();
    } finally {
      setIsLoading(false);
    }
  };
  return { signin, isLoading };
};
