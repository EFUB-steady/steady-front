import { atom } from "recoil";

export const signUpState = atom({
  key: "signUpState",
  default: {
    name: "",
    nickname: "",
    email: "",
    password: "",
    phone: "",
  },
});