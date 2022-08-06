import styled from "styled-components";
import { Subtitle2 } from "../../../../core/texts";
import { Row } from "../../commons/Row";
import { useMakeStudy } from "../../../../feature/MakeStudy/recoil/useMakeStudy";

export default function AbsentMoneyInput() {
  const { money, setMoney } = useMakeStudy();

  return (
    <AuthDayWrapper>
      <Subtitle2>결석 시</Subtitle2>
      <Row>
        <Input
          placeholder="2000"
          value={money}
          onChange={(e) => {
            setMoney(e.target.value);
          }}
        />
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
