import { atom } from "recoil";

export const signInState = atom({
  key: "signInState",
  default: {
    name: "",
    nickname: "",
    email: "",
    password: "",
    phone: "",
  },
});
