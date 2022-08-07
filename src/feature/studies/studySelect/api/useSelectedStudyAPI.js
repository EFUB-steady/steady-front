import { useState } from "react";
import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import {
  useSelectedStudyId,
  useSelectedStudyInfo,
} from "../recoil/useSelectedStudy";

export const useSelectedStudyAPI = () => {
  const { selectedStudyId } = useSelectedStudyId();
  const { setSelectedStudy } = useSelectedStudyInfo();
  const [isLoading, setIsLoading] = useState(false);

  // TODO: 에러처리
  const selectedStudyAPI = async () => {
    setIsLoading(true);

    try {
      const { data } = await axiosInstanceHeader.get(
        `studies/${selectedStudyId}`,
      );
      if (data) {
        setSelectedStudy(data);
      }
    } catch (error) {
      console.log("Error....!!!!", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { selectedStudyAPI, isLoading };
};
