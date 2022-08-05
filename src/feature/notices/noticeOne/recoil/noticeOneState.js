import { atom } from "recoil";

export const noticeOneState = atom({
  key: "noticeOneState",
  default: {
    noticeId: 0,
    studyId: 0,
    content: "",
  },
});
