import { useRecoilState } from "recoil";
import { noticeInputState } from "./noticeState";

export const useNoticeInput = () => {
  const [noticeInput, setNoticeInput] = useRecoilState(noticeInputState);

  return {
    noticeInput,
    setNoticeInput,
  };
};
