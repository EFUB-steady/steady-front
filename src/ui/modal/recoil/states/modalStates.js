import { atom } from "recoil";

// 오늘 날짜 인증하기
export const uploadStudyModalState = atom({
  key: "uploadStudyModalState",
  default: null,
});

//전날 보충하기
export const uploadStudyModalSupplyState = atom({
  key: "uploadStudyModalSupplyState",
  default: null,
});

// 스터디 목록 보기
export const studyListModalState = atom({
  key: "studyListModalState",
  default: null,
});

//HostMain 창에서 신고 자세히 보기를 누르면 뜨는 부분입니다.
export const reportMoreModalState = atom({
  key: "reportMoreModalState",
  default: null,
});

//인증취소(신고 자세히 보기 창에서 인증 취소 버튼을 누른 후 뜨는 부분입니다. (피그마: 신고팝업)
export const reportCancelModalState = atom({
  key: "reportCancelModalState",
  default: null,
});

// 로그인 실패 시 뜨는 모달입니다.
export const loginFailModalState = atom({
  key: "loginFailModalState",
  default: null,
});

//회원가입 실패 시 뜨는 모달입니다.
export const signUpFailModalState = atom({
  key: "signUpFailModalState",
  default: null,
});
