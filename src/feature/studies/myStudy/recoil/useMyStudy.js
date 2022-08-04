import { useRecoilState } from "recoil";
import { myStudyState } from "./myStudyState";

export const useMyStudy = () => {
  const [myStudy, setMyStudy] = useRecoilState(myStudyState);

  return {
    myStudy,
    setMyStudy,
  };
};
