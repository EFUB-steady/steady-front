import { atom } from "recoil";

export const loginFormState = atom({
  key: "loginFormState",
  default: {
    email: "",
    password: "",
  },
});
