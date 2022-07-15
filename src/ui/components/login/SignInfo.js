import styled from "styled-components";
import UserJoinBtn from "../buttons/user/UserJoinBtn";

import InputArea from "./InputArea";
export default function SignInfo() {
  return (
    <>
      <SignBox>
        <SignText>
          <LoginHelpText>이름 (실명)</LoginHelpText>
          <LoginHelpText>닉네임</LoginHelpText>
          <LoginHelpText>휴대폰 번호</LoginHelpText>
          <LoginHelpText>비밀번호</LoginHelpText>
          <LoginHelpText>비밀번호 확인</LoginHelpText>
        </SignText>
        <SignInput>
          <InputArea></InputArea>
          <InputArea></InputArea>
          <InputArea></InputArea>
          <InputArea></InputArea>
          <InputArea></InputArea>
          <InputArea></InputArea>
        </SignInput>
      </SignBox>
      <UserJoinBtn />
    </>
  );
}

const SignText = styled.div``;
const SignInput = styled.div``;
const SignBox = styled.div`
  display: flex;
  margin-top: 40.31px;
`;
/*로그인 안내 글씨*/
export const LoginHelpText = styled.div`
  margin: 20px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 37px;
`;
