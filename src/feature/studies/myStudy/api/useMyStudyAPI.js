import { useState } from "react";
import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import { useSelectedStudyId } from "../../studySelect/recoil/useSelectedStudy";
import { useMyStudy } from "../recoil/useMyStudy";

export const useMyStudyAPI = () => {
  const { setMyStudy } = useMyStudy();
  const { selectedStudyId, setSelectedStudyId } = useSelectedStudyId();
  const [isLoading, setIsLoading] = useState(false);

  const myStudyAPI = async () => {
    setIsLoading(true);

    try {
      const { data } = await axiosInstanceHeader.get("studies/my-study");
      if (data) {
        if (selectedStudyId.studyId == null) {
          setSelectedStudyId(data[0].studyId);
        }
        console.log("myStudyAPI success!!");
        setMyStudy(data);
      }
    } catch (error) {
      console.log("myStudyAPI fail....");
    } finally {
      setIsLoading(false);
    }
  };

  return { myStudyAPI, isLoading };
};
