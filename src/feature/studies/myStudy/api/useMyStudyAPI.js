import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useMyStudy } from "../recoil/useMyStudy";

export const useMyStudyAPI = ({ onSuccess, onFail }) => {
  const { setMyStudy } = useMyStudy();

  const myStudyAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get("studies/my-study");
      if (data) {
        onSuccess && onSuccess();
        setMyStudy(data);
      }
    } catch (error) {
      onFail && onFail();
    }
  };

  return { myStudyAPI };
};
