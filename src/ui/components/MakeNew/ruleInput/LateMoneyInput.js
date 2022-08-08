import { TextField } from "@mui/material";
import styled from "styled-components";
import { Subtitle2 } from "../../../../core/texts";
import { useMakeStudy } from "../../../../feature/MakeStudy/recoil/useMakeStudy";
import { Row } from "../../commons/Row";
import { useState } from "react";

export default function LateMoneyInput() {
  const { lateMoney, setLateMoney } = useMakeStudy();
  const [temp, setTemp] = useState("");

  return (
    <AuthDayWrapper>
      <Subtitle2>지각 시</Subtitle2>
      <Row>
        <Input
          value={temp}
          placeholder="1000"
          onChange={(e) => {
            setTemp(e.target.value);
            setLateMoney(Number(e.target.value));
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
