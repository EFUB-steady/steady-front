import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useSelectedStudyId } from "../../studies/studySelect/recoil/useSelectedStudy";
import { useRanking } from "../recoil/useRanking";

export const useRankingAPI = () => {
  const { setRanking } = useRanking();
  const { selectedStudyId } = useSelectedStudyId();

  const rankingAPI = async () => {
    console.log("here!");
    try {
      const { data } = await axiosInstanceHeader.get(
        `studies/ranking/${selectedStudyId}`,
      );
      if (data) {
        setRanking(data);
        console.log("useRankingAPI: ", data);
      }
    } catch (error) {
      console.log("rankingAPI fail..");
    }
  };

  return { rankingAPI };
};
