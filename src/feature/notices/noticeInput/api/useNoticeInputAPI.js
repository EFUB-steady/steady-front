import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useNoticeInput } from "../recoil/useNoticeInput";
import { useSelectedStudyId } from "../../../studies/studySelect/recoil/useSelectedStudy";

export const useNoticeInputAPI = ({ onSuccess, onFail }) => {
  const { setNoticeInput } = useNoticeInput();
  // const { selectedStudyId } = useSelectedStudyId();

  const noticeInputAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.post("notices");
      if (data) {
        onSuccess && onSuccess();
        setNoticeInput(data);
        console.log("성공");
      }
    } catch (error) {
      // onFail && onFail();
      console.log("실패");
    }
  };

  return { noticeInputAPI };
};
