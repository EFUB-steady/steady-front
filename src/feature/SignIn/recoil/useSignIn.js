import { useRecoilState } from "recoil";
import { signInState } from "./SignInState";

export const useSignIn = () => {
  const [signIn, setSignIn] = useRecoilState(signInState);

  const setName = (name) => {
    setSignIn((input) => ({
      ...input,
      name: name,
    }));
  };

  const setNickName = (nickname) => {
    setSignIn((input) => ({
      ...input,
      nickname: nickname,
    }));
  };

  const setEmail = (email) => {
    setSignIn((input) => ({
      ...input,
      email: email,
    }));
  };

  const setPassWord = (password) => {
    setSignIn((input) => ({
      ...input,
      password: password,
    }));
  };

  const setPhone = (phone) => {
    setSignIn((input) => ({
      ...input,
      phone: phone,
    }));
  };

  const SignInReset = () => {
    setSignIn({
      name: "",
      nickname: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return {
    name: signIn.name,
    nickname: signIn.nickname,
    email: signIn.email,
    password: signIn.password,
    phone: signIn.phone,
    setName,
    setNickName,
    setEmail,
    setPassWord,
    setPhone,
    SignInReset
  };
};
