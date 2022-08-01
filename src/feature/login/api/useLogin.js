import { axiosInstance } from "../../../core/axiosInstance";
import { useLoggedIn } from "../recoil/useLoggedIn";
import { useState } from "react";
import { useLoginInput } from "../recoil/useLoginInput";

export const useLogin = () => {
  const { email: inputEmail, password: inputPassword } = useLoginInput();
  const { isLoggedIn, setIsLoggedIn } = useLoggedIn();
  const [isLoading, setIsLoading] = useState(false);

  const login = async ({ onSuccess, onFail }) => {
    setIsLoading(true);
    try {
      const data = await axiosInstance.post("users/login", {
        email: inputEmail,
        password: inputPassword,
      });

      if (data) {
        onSuccess && onSuccess();
        if (data.data.token)
          localStorage.setItem("accessToken", data.data.token);
        if (localStorage.getItem("accessToken")) setIsLoggedIn(true);
      }
    } catch (error) {
      onFail && onFail();
    } finally {
      setIsLoading(false);
    }
  };

  return { login, isLoading };
};
