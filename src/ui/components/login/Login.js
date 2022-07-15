import styled from "styled-components";
import LoginBtn from "./../buttons/user/LoginBtn";
import InputArea from "./InputArea";
import logo from "../../../assets/logo_horizontal.png";

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
      <div style={{ display: "flex" }}>
        <LoginHelpText> 아이디/비밀번호 찾기</LoginHelpText>
        <LoginHelpText>회원 가입하기</LoginHelpText>
      </div>
    </LoginBox>
  );
}

/*로그인 안내 글씨*/
export const LoginHelpText = styled.div`
  margin: 20px;
  display: inline-flex;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
`;
const LoginBox = styled.div``;

const IdPwBox = styled.div`
  display: flex;
`;

const LogoImg = styled.img``;
