import { atom } from "recoil";

// 달력을 통해 조회하려는 날짜 저장
export const studyListDateState = atom({
  key: "studyListDateState",
  default: new Date(),
});
