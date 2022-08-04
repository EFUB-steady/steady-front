import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import {
  useSelectedStudyId,
  useSelectedStudyInfo,
} from "../recoil/useSelectedStudy";

export const useSelectedStudyAPI = () => {
  const { selectedStudyId } = useSelectedStudyId();
  const { setSelectedStudy } = useSelectedStudyInfo();

  // TODO: 에러처리
  const selectedStudyAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get(
        `studies/${selectedStudyId}`,
      );

      if (data) {
        setSelectedStudy(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { selectedStudyAPI };
};
