import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import { useUser } from "../../../feature/user/recoil/useUser";
import React from "react";

export default function ModifyMyInfo() {
  const { user } = useUser();

  return (
    <>
      <SignBox>
        <Text>닉네임</Text>
        <InputBox>{user.nickname}</InputBox>
      </SignBox>
      <SignBox>
        <Text>이름</Text>
        <InputBox>{user.name}</InputBox>
      </SignBox>
      <SignBox>
        <Text>ID</Text>
        <InputBox>{user.email}</InputBox>
      </SignBox>
      <SignBox>
        <Text>연락처</Text>
        <InputBox>{user.phone}</InputBox>
      </SignBox>
    </>
  );
}

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

const SignBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
`;

const InputBox = styled.div`
  background-color: ${gray100};
  padding: 8px;
  font-size: 10px;
  font-weight: 400;
  width: 220px;
  height: 28px;
  border-radius: 5px;
`;
