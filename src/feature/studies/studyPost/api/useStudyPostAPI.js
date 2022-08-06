import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useUser } from "../../../user/recoil/useUser";
import { useSelectedStudyId } from "../../studySelect/recoil/useSelectedStudy";
import { useStudyPost, useStudyPostInput } from "../recoil/useStudyPost";

export const useStudyPostAPI = () => {
  const { setStudyPost } = useStudyPost();
  const { link: inputLink, imageUrl: inputImageUrl } = useStudyPostInput();
  const { user } = useUser();
  const { selectedStudyId } = useSelectedStudyId();

  const studyPostAPI = async () => {
    try {
      const { data } = await axiosInstanceHeader.post("studyPosts", {
        userId: user.userId,
        studyId: selectedStudyId,
        link: inputLink,
        imgUrl: inputImageUrl,
      });

      if (data) {
        console.log("study post 성공");
        setStudyPost(data);
      }
    } catch (error) {
      console.log("study post 실패");
    }
  };

  return { studyPostAPI };
};
