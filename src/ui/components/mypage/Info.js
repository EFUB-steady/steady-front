import styled from "styled-components";
import ModifyInfoBtn from "../buttons/user/ModifyInfoBtn";
import { useState } from "react";
import { gray100 } from "../../../core/colors";
import { Divider, Input } from "@mui/material";
export default function Info() {
  const [nickInput, setNickInput] = useState("");
  return (
    <>
      <Text>내 정보</Text>
      <ModifyInfoBtn />
      <Input
        placeholde="이화연22"
        value={nickInput}
        onChange={(e) => {
          setNickInput(e.target.value);
        }}
        fullWidth={true}
        disableUnderline={true}
        style={{
          backgroundColor: gray100,
          padding: "8px",
          fontSize: 10,
          fontWeight: 400,
          width: 220,
          height: 28,
        }}
      />
    </>
  );
}

const Text = styled.div`
  width: 60px;
  height: 21px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
`;
