import React from "react";
import styled from "styled-components";

import SignInfoItem from "./SignInfoItem";

const SIGN_DATA = [
  {
    id: 1,
    name: "이름 (실명)",
    explain: "김이화",
  },
  {
    id: 2,
    name: "닉네임",
    explain: "김이화",
  },
  {
    id: 3,
    name: "휴대폰 번호",
    explain: "010-0000-0000",
  },
  {
    id: 4,
    name: "이메일 아이디",
    explain: "ewhakim@mail.com",
  },
  {
    id: 5,
    name: "비밀번호",
    explain: "영문/숫자/특수문자 중 2가지 이상 조합, 8자 이상",
  },
  {
    id: 6,
    name: "비밀번호 확인",
    explain: "영문/숫자/특수문자 중 2가지 이상 조합, 8자 이상",
  },
];

export default function SignInfoList() {
  return (
    <Wrapper>
      {SIGN_DATA.map((sign) => (
        <SignInfoItem key={sign.id} sign={sign} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div``;
