import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import styled from "styled-components";
import { Subtitle2 } from "../../../../core/texts";
import { useMakeStudy } from "../../../../feature/MakeStudy/recoil/useMakeStudy";
import { Row } from "../../commons/Row";

export default function RuleAuthDayInput() {
  const [timeZoneInput, setTimeZoneInput] = useState("오전");

  const timeZoneInputHandler = (e) => {
    setTimeZoneInput(e.target.value);
  };

  const { hour, minute, setHour, setMinute } = useMakeStudy();

  return (
    <AuthDayWrapper>
      <div style={{ width: 110 }}>
        <Subtitle2>지정 인증일</Subtitle2>
      </div>

      <FormControl
        style={{
          height: 35,
          width: 100,
          backgroundColor: "white",
          justifyContent: "center",
        }}
        size="small"
      >
        <Select
          id="demo-select-box"
          value={timeZoneInput}
          onChange={timeZoneInputHandler}
          style={{ textAlign: "center" }}
        >
          <MenuItem value={"오전"}>오전</MenuItem>
          <MenuItem value={"오후"}>오후</MenuItem>
        </Select>
      </FormControl>
      <Row>
        <Input
          placeholder="00"
          type="text"
          value={hour}
          onChange={(e) => {
            setHour(e.target.value);
          }}
        />
        <Subtitle2>시</Subtitle2>
      </Row>
      <Row>
        <Input
          value={minute}
          placeholder="00"
          type="text"
          onChange={(e) => {
            setMinute(e.target.value);
          }}
        />
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

const Input = styled.input`
  background-color: white;
  height: 35px;
  width: 50px;
  text-align: center;
  border: 0;
  margin-left: 25px;
  margin-right: 5px;
  font-size: 18px;
  font-family: "Pretendard";
`;
