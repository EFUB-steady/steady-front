import { useState } from "react";
import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useSelectedStudyId } from "../../studies/studySelect/recoil/useSelectedStudy";
import { useRanking } from "../recoil/useRanking";

export const useRankingAPI = () => {
  const { setRanking } = useRanking();
  const { selectedStudyId } = useSelectedStudyId();
  const [isLoading, setIsLoading] = useState(false);

  const rankingAPI = async ({ onSuccess, onFail }) => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstanceHeader.get(
        `studies/ranking/${selectedStudyId}`,
      );
      if (data) {
        onSuccess && onSuccess();
        setRanking(data);
      }
    } catch (error) {
      onFail && onFail();
    } finally {
      setIsLoading(false);
    }
  };

  return { rankingAPI, isLoading };
};
