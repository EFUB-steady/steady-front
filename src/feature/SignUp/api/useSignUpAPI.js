import { axiosInstance } from "../../../core/axiosInstance";
import { useSignUp } from "../recoil/useSignUp";
import { useState } from "react";

export const useSignUpAPI = () => {
  const {
    name: inputName,
    nickname: inputNickName,
    email: inputEmail,
    password: inputPassWord,
    phone: inputPhone,
  } = useSignUp();

  const [isLoading, setIsLoading] = useState(false);

  const signUpAPI = async ({ onSuccess, onFail }) => {
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
      }
    } catch (error) {
      onFail && onFail();
    } finally {
      setIsLoading(false);
    }
  };
  return { signUpAPI, isLoading };
};
