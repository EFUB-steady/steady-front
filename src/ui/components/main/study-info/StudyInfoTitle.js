import styled from "styled-components";
import AuthBtn from "./../../buttons/study/AuthBtn";
import { Title1 } from "./../../../../core/texts";

export default function StudyInfoTitle() {
  return (
    <InfoTitleBox>
      <Title1>Folio</Title1>
      <AuthBtn />
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
`;
