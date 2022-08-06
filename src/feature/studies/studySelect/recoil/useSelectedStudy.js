import { useRecoilState } from "recoil";
import {
  selectedStudyIdState,
  selectedStudyInfoState,
  selectedStudyIsLeaderState,
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

export const useSelectedStudyIsLeader = () => {
  const [isLeader, setIsLeader] = useRecoilState(selectedStudyIsLeaderState);

  return {
    isLeader,
    setIsLeader,
  };
};
