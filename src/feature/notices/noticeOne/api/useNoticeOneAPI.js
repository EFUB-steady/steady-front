import { useState } from "react";
import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useNoticeOne } from "../recoil/useNoticeOne";

export const useNoticeOneAPI = () => {
  const { setNoticeOne } = useNoticeOne();
  const [isLoading, setIsLoading] = useState(false);

  const noticeOneAPI = async () => {
    setIsLoading(true);
    try {
      const { data } = await axiosInstanceHeader.get("notices/1");
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
