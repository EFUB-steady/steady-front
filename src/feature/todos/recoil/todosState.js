import { atom } from "recoil";

export const todosState = atom({
  key: "todosState",
  default: {
    studyId: 0,
    studyName: "",
    hour: 0,
    minute: 0,
  },
});
