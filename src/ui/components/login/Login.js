import styled from "styled-components";
import LoginBtn from "./../buttons/user/LoginBtn";
import InputArea from "./InputArea";
import logo from "../../../assets/logo_horizontal.png";
import { LoginHelpText } from "../../../core/texts";

export default function Login() {
  return (
    <LoginBox>
      <LogoImg src={logo} />
      <IdPwBox>
        <div>
          <InputArea>이메일 아이디</InputArea>
          <InputArea>비밀번호</InputArea>
        </div>
        <LoginBtn />
      </IdPwBox>
      <LoginHelpText>아이디/비밀번호 찾기</LoginHelpText>
      <LoginHelpText>회원 가입하기</LoginHelpText>
    </LoginBox>
  );
}

const LoginBox = styled.div``;

const IdPwBox = styled.div`
  display: flex;
`;

const LogoImg = styled.img``;
