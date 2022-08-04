import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useSelectedStudyId } from "../../studies/studySelect/recoil/useSelectedStudy";
import { useRanking } from "../recoil/useRanking";

export const useRankingAPI = () => {
  const { setRanking } = useRanking();
  const { selectedStudyId } = useSelectedStudyId();

  const rankingAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get(
        `studies/ranking/${selectedStudyId}`,
      );
      if (data) {
        setRanking(data);
      }
    } catch (error) {
      console.log("rankingAPI fail..");
    }
  };

  return { rankingAPI };
};
