import { useRecoilState } from "recoil";
import { studyListByDateState } from "./studyListByDateState";

export const useStudyListByDate = () => {
  const [studyListByDate, setStudyListByDate] =
    useRecoilState(studyListByDateState);

  return {
    studyListByDate,
    setStudyListByDate,
  };
};
