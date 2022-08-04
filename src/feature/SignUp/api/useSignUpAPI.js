import { axiosInstance } from "../../../core/axiosInstance";
import {  useSignUp } from "../recoil/useSignUp";
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

  const signup = async ({ onSuccess, onFail }) => {
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
  return {  signup, isLoading };
};
