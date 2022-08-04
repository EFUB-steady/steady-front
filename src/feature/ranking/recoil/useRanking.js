import { useRecoilState } from "recoil";
import { rankingState } from "./rankingState";

export const useRanking = () => {
  const [ranking, setRanking] = useRecoilState(rankingState);

  return {
    ranking,
    setRanking,
  };
};
