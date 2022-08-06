import { atom } from "recoil";

export const rankingState = atom({
  key: "rankingState",
  default: { userId: 0, studyId: 0, score: 0 },
});
