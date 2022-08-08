import styled from "styled-components";
import { Body2, Subtitle2 } from "../../../../core/texts";
import { Row } from "../../commons/Row";

export default function PaneltyMoney({ title, money }) {
  return (
    <AuthDayWrapper>
      <Subtitle2>{title}</Subtitle2>
      <Row>
        <WhiteBox>
          <Body2>{money.toString()}</Body2>
        </WhiteBox>
        <Subtitle2>원</Subtitle2>
      </Row>
    </AuthDayWrapper>
  );
}

const AuthDayWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const WhiteBox = styled.div`
  background-color: white;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 25px;
`;
