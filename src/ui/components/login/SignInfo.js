import styled from "styled-components";
import UserJoinBtn from "../buttons/user/UserJoinBtn";
import InputArea from "./InputArea";
export default function SignInfo() {
  return (
    <>
      <SignBox>
        <LoginHelpText>이름 (실명)</LoginHelpText>
        <InputArea></InputArea>
        <LoginHelpText>닉네임</LoginHelpText>
        <InputArea></InputArea>
        <LoginHelpText>휴대폰 번호</LoginHelpText>
        <InputArea></InputArea>
        <LoginHelpText>이메일 아이디</LoginHelpText>
        <InputArea></InputArea>
        <LoginHelpText>비밀번호</LoginHelpText>
        <InputArea></InputArea>
        <LoginHelpText>비밀번호 확인</LoginHelpText>
        <InputArea></InputArea>
      </SignBox>
      <UserJoinBtn />
    </>
  );
}

const SignBox = styled.div`
  display: flex;
  flex-direction: column;
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
