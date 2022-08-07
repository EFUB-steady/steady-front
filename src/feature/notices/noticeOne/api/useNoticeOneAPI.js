import { useState } from "react";
import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useSelectedStudyId } from "../../../studies/studySelect/recoil/useSelectedStudy";
import { useNoticeOne } from "../recoil/useNoticeOne";

export const useNoticeOneAPI = () => {
  const { setNoticeOne } = useNoticeOne();
  const [isLoading, setIsLoading] = useState(false);
  const { selectedStudyId } = useSelectedStudyId();

  const noticeOneAPI = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstanceHeader.get(
        `notices/studies/${selectedStudyId}`,
      );
      if (data) {
        console.log("notice 됨");
        setNoticeOne(data);
      }
    } catch (error) {
      console.log("공지사항 실패");
    } finally {
      setIsLoading(false);
    }
  };

  return { noticeOneAPI, isLoading };
};
