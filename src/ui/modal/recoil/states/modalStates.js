import { atom } from "recoil";

export const uploadStudyModalState = atom({
  key: "uploadStudyModalState",
  default: null,
});

//날짜를 누르면 Modal이 뜨는 부분입니다.
export const todayStudyModalState = atom({
  key: "todayStudyModalState",
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
