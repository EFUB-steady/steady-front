import { useRecoilState } from "recoil";
import {
  selectedStudyIdState,
  selectedStudyInfoState,
} from "./selectedStudyState";

export const useSelectedStudyId = () => {
  const [selectedStudyId, setSelectedStudyId] =
    useRecoilState(selectedStudyIdState);

  return {
    selectedStudyId,
    setSelectedStudyId,
  };
};

export const useSelectedStudyInfo = () => {
  const [selectedStudy, setSelectedStudy] = useRecoilState(
    selectedStudyInfoState,
  );

  return {
    selectedStudy,
    setSelectedStudy,
  };
};
