import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    userId: "",
    nickname: "",
    email: "",
    phone: "",
    name: "",
    message: "",
  },
});
