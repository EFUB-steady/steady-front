import { atom } from "recoil";

export const noticeListState = atom({
  key: "noticeListState",
  default: {
    status: 0,
    noticeId: 0,
    studyId: 0,
    content: "",
  },
});
