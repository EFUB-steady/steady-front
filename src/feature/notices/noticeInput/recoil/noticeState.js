import { atom } from "recoil";

export const noticeInputState = atom({
  key: "noticeInputState",
  default: {
    study: {
      id: 0,
    },
    content: "",
  },
});

