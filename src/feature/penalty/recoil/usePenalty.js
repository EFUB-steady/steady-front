import { useRecoilState } from "recoil";
import { penaltyState } from "./penaltyState";

// 사용할 수 있는 훅 만들기

export const usePenalty = () => {
  const [penalty, setPenalty] = useRecoilState(penaltyState); // 아까 정의한 상태 넣기

  // 함수 적는 곳 -> 리턴값
  // const 땡땡떙 으로 만들어서

  return {
    penalty,
    setPenalty,
    // 리턴값 떙땡떙 으로 사용
  };
};
