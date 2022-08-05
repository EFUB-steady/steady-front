import { useRecoilState } from "recoil";
import { signUpState } from "./SignUpState";

export const useSignUp = () => {
  const [signUp, setSignUp] = useRecoilState(signUpState);

  const setName = (name) => {
    setSignUp((input) => ({
      ...input,
      name: name,
    }));
  };

  const setNickName = (nickname) => {
    setSignUp((input) => ({
      ...input,
      nickname: nickname,
    }));
  };

  const setEmail = (email) => {
    setSignUp((input) => ({
      ...input,
      email: email,
    }));
  };

  const setPassWord = (password) => {
    setSignUp((input) => ({
      ...input,
      password: password,
    }));
  };

  const setPhone = (phone) => {
    setSignUp((input) => ({
      ...input,
      phone: phone,
    }));
  };

  const signUpReset = () => {
    setSignUp({
      name: "",
      nickname: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return {
    name: signUp.name,
    nickname: signUp.nickname,
    email: signUp.email,
    password: signUp.password,
    phone: signUp.phone,
    setName,
    setNickName,
    setEmail,
    setPassWord,
    setPhone,
    signUpReset,
  };
};
