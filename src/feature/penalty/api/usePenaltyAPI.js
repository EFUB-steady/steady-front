import {
  axiosInstance,
  axiosInstanceHeader,
} from "../../../core/axiosInstance";
// 인스턴스 종류는 2가지 -> 로그인 제외 해더 필요 없음
import { usePenalty } from "../recoil/usePenalty"; // 훅 가져왔음
import { useState } from "react";

export const usePenaltyAPI = () => {
  const { setPenalty } = usePenalty();
  const [isLoading, setIsLoading] = useState(false);

  const penaltyAPI = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstance.get("studies/fines");
      if (data) {
        console.log("성공");
        setPenalty(data);
      }
    } catch (error) {
      console.log("실패");
    } finally {
      setIsLoading(false);
    }
  };
  return { penaltyAPI, isLoading };
};

// 사용할 API 완성
