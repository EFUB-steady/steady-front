import { useRecoilState } from "recoil";
import { noticeOneState } from "./noticeOneState";

export const useNoticeOne = () => {
  const [noticeOne, setNoticeOne] = useRecoilState(noticeOneState);

  return {
    noticeOne,
    setNoticeOne,
  };
};
