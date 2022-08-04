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

// export const signedUpState = atom({
//   key: "signedUpState",
//   default: false,
// })