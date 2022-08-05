import {
  axiosInstance,
  axiosInstanceHeader,
} from "../../../core/axiosInstance";
// 인스턴스 종류는 2가지 -> 로그인 제외 해더 필요 없음
import { usePenalty } from "../recoil/usePenalty";

export const usePenaltyAPI = () => {
  const { setPenalty } = usePenalty();

  const penaltyAPI = async ({ onSuccess, onFail }) => {
    try {
      const { data } = await axiosInstance.get("studies/fines");
      if (data) {
        onSuccess && onSuccess();
        setPenalty(data);
      }
    } catch (error) {
      onFail && onFail();
    }
  };
  return { penaltyAPI };
};

// 사용할 API 완성
