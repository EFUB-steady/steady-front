import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useSelectedStudyId } from "../../../../feature/studies/studySelect/recoil/useSelectedStudy";
import { useStudyListDate } from "../../../../feature/studyList/recoil/useStudyListDate";
import { useStudyListByDate } from "../recoil/useStudyListByDate";

export const useStudyListByDateAPI = () => {
  const { selectedStudyId } = useSelectedStudyId();
  const { setStudyListByDate } = useStudyListByDate();
  const { formattedDate } = useStudyListDate();

  // TODO: 에러처리
  const studyListByDateAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get(
        `/studyPosts/studies/${selectedStudyId}/${formattedDate}`,
      );

      if (data) {
        setStudyListByDate(data);
        console.log("studyListByDate:", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { studyListByDateAPI };
};
