import styled from "styled-components";
import { Body2, Subtitle2 } from "../../../../core/texts";
import { Row } from "../../commons/Row";

export default function RuleAuthDay({}) {
  return (
    <AuthDayWrapper>
      <div style={{ width: 100 }}>
        <Subtitle2>지정 인증일</Subtitle2>
      </div>
      <WhiteBox>
        <Body2>월, 화, 수, 목, 금, 토</Body2>
      </WhiteBox>
      <WhiteBox>
        <Body2>오전</Body2>
      </WhiteBox>
      <Row>
        <WhiteBox>
          <Body2>00</Body2>
        </WhiteBox>
        <Subtitle2>시</Subtitle2>
      </Row>
      <Row>
        <WhiteBox>
          <Body2>00</Body2>
        </WhiteBox>
        <Subtitle2>분</Subtitle2>
      </Row>
    </AuthDayWrapper>
  );
}

const AuthDayWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const WhiteBox = styled.div`
  background-color: white;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 25px;
`;
