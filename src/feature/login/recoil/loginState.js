import { atom } from "recoil";

export const loginInputState = atom({
  key: "loginFormState",
  default: {
    email: "",
    password: "",
  },
});

export const loggedInState = atom({
  key: "loggedInState",
  default: false,
});
