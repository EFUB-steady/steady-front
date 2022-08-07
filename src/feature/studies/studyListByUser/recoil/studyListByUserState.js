import { atom } from "recoil";

export const studyListByUserState = atom({
  key: "studyListByUserState",
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
