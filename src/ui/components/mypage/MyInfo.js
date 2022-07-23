import styled from "styled-components";
import ModifyInfoBtn from "../buttons/user/ModifyInfoBtn";
import { useState } from "react";
import { gray100 } from "../../../core/colors";
import { Divider, Input } from "@mui/material";

export default function Info() {
  const [nickInput, setNickInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [phoneNumInput, setPhoneNumInput] = useState("");
  return (
    <>
      <TitleText>내 정보</TitleText>
      <ModifyInfoBtn />
      <Text>닉네임</Text>
      <Input
        placeholder="이화연22"
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
      <Text>이름</Text>
      <Input
        placeholder="김이화"
        value={nameInput}
        onChange={(e) => {
          setNameInput(e.target.value);
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
      <Text>ID</Text>
      <Input
        placeholder="ewhakim22"
        value={idInput}
        onChange={(e) => {
          setIdInput(e.target.value);
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
      <Text>PW</Text>
      <Input
        placeholder="*******"
        value={pwInput}
        onChange={(e) => {
          setPwInput(e.target.value);
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
      <Text>연락처</Text>
      <Input
        placeholder="김이화"
        value={phoneNumInput}
        onChange={(e) => {
          setPhoneNumInput(e.target.value);
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

const TitleText = styled.div`
  position: absolute;
  width: 60px;
  height: 21px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
`;
const Text = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
`;
