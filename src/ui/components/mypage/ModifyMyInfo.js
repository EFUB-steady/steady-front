import styled from "styled-components";
import ModifyInfoBtn from "../buttons/user/ModifyInfoBtn";
import { useState } from "react";
import { gray100 } from "../../../core/colors";
import { Input } from "@mui/material";
import { useUser } from "../../../feature/user/recoil/useUser";

export default function ModifyMyInfo() {
  const [nickInput, setNickInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [idInput, setIdInput] = useState("");
  const [pwInput, setPwInput] = useState("");
  const [phoneNumInput, setPhoneNumInput] = useState("");

  const { user } = useUser();

  return (
    <>
      <InfoHeader>
        <TitleText>내 정보</TitleText>
        <ModifyInfoBtn />
      </InfoHeader>
      <SignBox>
        <Text>닉네임</Text>
        <Input
          placeholder={user.nickname}
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
      </SignBox>
      <SignBox>
        <Text>이름</Text>
        <Input
          placeholder={user.name}
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
      </SignBox>
      <SignBox>
        <Text>ID</Text>
        <Input
          placeholder={user.email}
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
      </SignBox>
      <SignBox>
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
      </SignBox>
      <SignBox>
        <Text>연락처</Text>
        <Input
          placeholder={user.phone}
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
      </SignBox>
    </>
  );
}

const TitleText = styled.div`
  width: 200px;
  height: 21px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
  margin-bottom: 45px;
`;
const Text = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  width: 155px;
  height: 42px;
  display: flex;
  align-items: center;
`;

const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 380px;

  padding-top: 40px;
  margin-right: 20px;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
`;
