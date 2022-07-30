import { useState } from "react";
import { axiosInstance } from "../../../core/axiosInstance";
import { useLoginInput } from "../recoil/useLoginInput";

export const useLogin = () => {
  const { email: inputEmail, password: inputPassword } = useLoginInput();
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
      }
    } catch (error) {
      onFail && onFail();
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading };
};
