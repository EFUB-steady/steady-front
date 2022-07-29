import { useState } from "react";
import { useAuth } from "../../auth/recoil/useAuth";
import { useLoginForm } from "./useLoginForm";
import { loginAPI } from "../api/loginAPI";
export const useLogin = () => {
  const { email: inputEmail, password: inputPassword } = useLoginForm();
  const { updateAuth } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const login = async ({ onSuccess, onFail }) => {
    setIsLoading(true);

    try {
      const { token } = await loginAPI({
        email: inputEmail,
        password: inputPassword,
      });

      if (token) {
        await updateAuth(token);
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
