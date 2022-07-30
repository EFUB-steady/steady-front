import { atom } from "recoil";

export const loginInputState = atom({
  key: "loginFormState",
  default: {
    email: "",
    password: "",
  },
});
