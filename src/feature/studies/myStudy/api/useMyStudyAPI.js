import { useState } from "react";
import { axiosInstanceHeader } from "../../../../core/axiosInstance";
import {
  useSelectedStudyId,
  useSelectedStudyIsLeader,
} from "../../studySelect/recoil/useSelectedStudy";
import { useMyStudy } from "../recoil/useMyStudy";

export const useMyStudyAPI = () => {
  const { setMyStudy } = useMyStudy();
  const { selectedStudyId, setSelectedStudyId } = useSelectedStudyId();
  const { setIsLeader } = useSelectedStudyIsLeader();
  const [isLoading, setIsLoading] = useState(false);

  const myStudyAPI = async () => {
    setIsLoading(true);

    try {
      const { data } = await axiosInstanceHeader.get("studies/my-study");
      if (data) {
        setTimeout(() => {
          if (selectedStudyId.studyId == 0) {
            setSelectedStudyId(data[0].studyId);
            setIsLeader(data[0].leader);
          }
        }, [1000]);

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
