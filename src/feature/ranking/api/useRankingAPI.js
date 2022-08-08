import { useState } from "react";
import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useSelectedStudyId } from "../../studies/studySelect/recoil/useSelectedStudy";
import { useRanking } from "../recoil/useRanking";

export const useRankingAPI = () => {
  const { setRanking } = useRanking();
  const { selectedStudyId } = useSelectedStudyId();
  const [isLoading, setIsLoading] = useState(false);

  const rankingAPI = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstanceHeader.get(
        `studies/ranking/${selectedStudyId}`,
      );
      if (data) {
        setRanking(data);
      }
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return { rankingAPI, isLoading };
};
