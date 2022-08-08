import { atom } from "recoil";

export const userState = atom({
  key: "userState",
  default: {
    userId: 0,
    nickname: "",
    email: "",
    phone: "",
    name: "",
    message: null,
  },
});
