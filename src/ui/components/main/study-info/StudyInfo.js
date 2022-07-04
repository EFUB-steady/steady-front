import styled from "styled-components";
import { Title1 } from "../../../../core/texts";

export default function StudyInfo() {
  return (
    <InfoBox>
      <div style={{ display: "flex" }}>
        <Title1>Folio</Title1>
        <div style={{ backgroundColor: "black", color: "white" }}>인증하기</div>
      </div>
      <Content>
        Folio은 이화여자대학교 기반의 디자인 포트폴리오 작업 스터디입니다.
        포트폴리오 작업을 인증하고 서로 성장하고 자극받을 수 있는 스터디가
        되었으면 합니다:)
      </Content>
    </InfoBox>
  );
}

const InfoBox = styled.div``;

const Content = styled.div``;
