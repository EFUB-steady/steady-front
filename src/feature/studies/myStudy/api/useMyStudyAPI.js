import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useSelectedStudyId } from "../../studySelect/recoil/useSelectedStudy";
import { useMyStudy } from "../recoil/useMyStudy";

export const useMyStudyAPI = ({ onSuccess, onFail }) => {
  const { setMyStudy } = useMyStudy();
  const { setSelectedStudyId } = useSelectedStudyId();

  const myStudyAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get("studies/my-study");
      if (data) {
        onSuccess && onSuccess();
        setMyStudy(data);
        setSelectedStudyId(data[0].studyId);
      }
    } catch (error) {
      onFail && onFail();
    }
  };

  return { myStudyAPI };
};
