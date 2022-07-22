import styled from "styled-components";
import { Subtitle2 } from "../../../../core/texts";
import { Row } from "../../commons/Row";

export default function PaneltyMoneyInput({ title, money }) {
  return (
    <AuthDayWrapper>
      <Subtitle2>{title}</Subtitle2>
      <Row>
        <Input placeholder={money.toString()} />
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

const Input = styled.input`
  background-color: white;
  height: 35px;
  width: 80px;
  text-align: center;
  border: 0;
  margin-left: 25px;
  margin-right: 5px;
  font-size: 18px;
  font-family: "Pretendard";
`;
