import { atom } from "recoil";

export const studyListByDateState = atom({
  key: "studyListByDateState",
  default: {
    status: 0,
    studyPostId: 0,
    userId: 0,
    userName: "",
    userNickname: "",
    studyId: 0,
    link: "",
    date: new Date(),
    studyPostimageId: 0,
    studyPostImageURL: "",
  },
});
