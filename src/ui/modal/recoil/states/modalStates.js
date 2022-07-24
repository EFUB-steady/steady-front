import { atom } from 'recoil'

export const uploadStudyModalState = atom({
  key: 'uploadStudyModalState',
  default: null,
})

//날짜를 누르면 Modal이 뜨는 부분입니다.
export const dateStudyModalState = atom({
  key: 'dateStudyModalState',
  default: null,
})