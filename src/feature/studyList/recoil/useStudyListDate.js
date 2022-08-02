import { useRecoilState } from "recoil";
import { studyListDateState } from "./studyListDateState";

export const useStudyListDate = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(studyListDateState);

  return { selectedDate, setSelectedDate };
};
