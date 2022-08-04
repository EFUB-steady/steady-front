import styled from "styled-components";
import { useSelectedStudyInfo } from "../../../../feature/studies/studySelect/recoil/useSelectedStudy";

import StudyInfoTitle from "./StudyInfoTitle";

export default function StudyInfo() {
  const { selectedStudy } = useSelectedStudyInfo();

  return (
    <>
      <StudyInfoTitle />
      <Content>{selectedStudy.description}</Content>
    </>
  );
}

const Content = styled.div`
  /* 스터디 설명 영역 */
  box-sizing: border-box;

  width: 100%;
  min-width: 987px;
  height: 149px;
  left: 282px;
  top: 269px;
  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
  line-height: 36px;

  /*텍스트 패딩*/
  padding-top: 15.29px;
  padding-left: 35px;
  padding-right: 26px;
  padding-bottom: 61.63px;

  margin-top: 24px;
`;
