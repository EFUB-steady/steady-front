import { useRecoilState } from "recoil";
import { noticeListState } from "./noticeListState";

export const useNoticeList = () => {
  const [noticeList, setNoticeList] = useRecoilState(noticeListState);

  return {
    noticeList,
    setNoticeList,
  };
};
