import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { loginFormState } from "./loginFormState";

export const useLoginForm = () => {
  const [loginForm, setLoginForm] = useRecoilState(loginFormState);

  const setEmail = (email) => {
    setLoginForm((form) => ({
      ...form,
      email: email,
    }));
  };

  const setPassword = (password) => {
    setLoginForm((form) => ({
      ...form,
      password: password,
    }));
  };

  const loginReset = () => {
    setLoginForm({
      email: "",
      password: "",
    });
  };

  return {
    email: loginForm.email,
    password: loginForm.password,
    setEmail,
    setPassword,
    loginReset,
  };
};
