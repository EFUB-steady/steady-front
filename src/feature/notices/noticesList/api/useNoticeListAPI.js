import { axiosInstanceHeader } from "../../../core/axiosInstance";
import { useSelectedStudyId } from "../../studies/studySelect/recoil/useSelectedStudy";
import { useNoticeList } from "../recoil/useNoticeList";

export const useNoticeListAPI = () => {
  const { setNoticeList } = useNoticeList();
  const { selectedStudyId } = useSelectedStudyId();

  const noticeListAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get(
        `notices/studies/${selectedStudyId}`,
      );
      if (data) {
        setNoticeList(data);
      }
    } catch (error) {
      console.log("공지사항 불러오기 실패요");
    }
  };

  return { noticeListAPI };
};
