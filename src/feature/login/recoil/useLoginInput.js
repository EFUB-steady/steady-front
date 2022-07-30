import { useRecoilState } from "recoil";
import { loginInputState } from "./loginInputState";

export const useLoginInput = () => {
  const [loginInput, setLoginInput] = useRecoilState(loginInputState);

  const setEmail = (email) => {
    setLoginInput((input) => ({
      ...input,
      email: email,
    }));
  };

  const setPassword = (password) => {
    setLoginInput((input) => ({
      ...input,
      password: password,
    }));
  };

  const loginReset = () => {
    setLoginInput({
      email: "",
      password: "",
    });
  };

  return {
    email: loginInput.email,
    password: loginInput.password,
    setEmail,
    setPassword,
    loginReset,
  };
};
