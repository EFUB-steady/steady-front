import styled from "styled-components";
import AuthBtn from "./../../buttons/study/AuthBtn";
import { Title1 } from "./../../../../core/texts";
import AuthSupplyBtn from "../../buttons/study/AuthSupplyBtn";
import { useSelectedStudyInfo } from "../../../../feature/studies/studySelect/recoil/useSelectedStudy";
import TestModal from "../../../modal/modals/TestModal";

export default function StudyInfoTitle() {
  const { selectedStudy } = useSelectedStudyInfo();

  return (
    <InfoTitleBox>
      <Title1>{selectedStudy.name}</Title1>
      <div>
        <AuthSupplyBtn />
        <AuthBtn />
        <TestModal />
      </div>
    </InfoTitleBox>
  );
}

const InfoTitleBox = styled.div`
  border-bottom: 3px solid black;
  padding-bottom: 13px;
  padding-top: 78.2px;

  display: flex;
  justify-content: space-between;
  width: 100%;
  min-width: 987px;
`;
