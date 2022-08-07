import { useRecoilState } from "recoil";
import { studyListByUserState } from "./studyListByUserState";

export const useStudyListByUser = () => {
  const [studyListByUser, setStudyListByUser] =
    useRecoilState(studyListByUserState);

  return {
    studyListByUser,
    setStudyListByUser,
  };
};
