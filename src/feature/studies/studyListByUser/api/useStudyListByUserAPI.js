import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useStudyListDate } from "../../../studyList/recoil/useStudyListDate";
import { useStudyListByUser } from "../recoil/useStudyListByUser";

export const useStudyListByUserAPI = () => {
  const { setStudyListByUser } = useStudyListByUser();
  const { formattedDate } = useStudyListDate();

  console.log(formattedDate);
  const studyListByUserAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.get(
        `/studyPosts/users/13/${formattedDate}`,
      );

      if (data) {
        setStudyListByUser(data);
        console.log("studyListByUser:", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { studyListByUserAPI };
};
