import { atom } from "recoil";

export const studyPostState = atom({
  key: "studyPostState",
  default: {
    status: 0,
    studyPostId: 0,
    userId: 0,
    studyId: 0,
    link: "",
    imageUrl: "",
    date: new Date(),
    nowFine: 0,
    studyPostSort: 0,
    error: "", //
    message: "", //
  },
});

export const studyPostInputState = atom({
  key: "studyPostInputState",
  default: {
    link: "",
    imageUrl: "",
  },
});
