import { format } from "date-fns";
import { useRecoilState } from "recoil";
import { studyListDateState } from "./studyListDateState";

export const useStudyListDate = () => {
  const [selectedDate, setSelectedDate] = useRecoilState(studyListDateState);
  const formattedDate = format(selectedDate, "yyyy-MM-dd");

  return { formattedDate, selectedDate, setSelectedDate };
};
