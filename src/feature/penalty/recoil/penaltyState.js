import { atom } from "recoil";

export const penaltyState = atom({
  // 사용할 데이터 타입 정의
  key: "penaltyState",
  default: {
    userId: 0,
    studyId: 0,
    lastFine: "",
    nowFine: "",
  },
});
