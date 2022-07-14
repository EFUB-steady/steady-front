import styled from "styled-components";

import LoginBtn from "./../buttons/user/LoginBtn";

import InputArea from "./InputArea";
import logo from "../../../assets/logo_horizontal.png";

export default function Login() {
  return (
    <LoginBox>
      <Logo src={logo} />
      <IdPwBox>
        <div>
          <InputArea>이메일 아이디</InputArea>
          <InputArea>비밀번호</InputArea>
        </div>
        <LoginBtn />
      </IdPwBox>
      <LoginHelp>아이디/비밀번호 찾기</LoginHelp>
      <LoginHelp>회원 가입하기</LoginHelp>
    </LoginBox>
  );
}

const LoginBox = styled.div``;

const IdPwBox = styled.div`
  display: flex;
`;

/*아이디 찾기, 회원가입하기*/
const LoginHelp = styled.div`
  margin: 20px;
  display: inline-flex;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
`;
const Logo = styled.img``;
