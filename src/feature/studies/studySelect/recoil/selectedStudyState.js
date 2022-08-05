import { atom } from "recoil";

export const selectedStudyIdState = atom({
  key: "selectedStudyIdState",
  default: { studyId: null },
});

export const selectedStudyInfoState = atom({
  key: "selectedStudyInfoState",
  default: {
    name: "",
    description: "",
    mon: false,
    tue: false,
    wed: false,
    thu: false,
    fri: true,
    sat: false,
    sun: true,
    account: "",
    time: 0,
    money: 0,
    lateMoney: 0,
  },
});

export const selectedStudyIsLeaderState = atom({
  key: "selectedStudyIsLeaderState",
  default: {
    leader: false,
  },
});
