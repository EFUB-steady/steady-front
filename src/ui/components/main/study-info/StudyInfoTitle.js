import styled from "styled-components";
import AuthBtn from "./../../buttons/study/AuthBtn";
import { Title1 } from "./../../../../core/texts";

export default function StudyInfoTitle() {
  return (
    <InfoTitleBox>
      <div style={{ display: "flex" }}>
        <Title1>Folio</Title1>
        <AuthBtn />
      </div>
    </InfoTitleBox>
  );
}

const InfoTitleBox = styled.div`
  border-bottom: 3px solid black;
  padding-bottom: 13px;
  padding-top: 78.2px;
`;
