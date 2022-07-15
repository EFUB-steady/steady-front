import styled from "styled-components";
import LoginBtn from "./../buttons/user/LoginBtn";
import TextField from "@mui/material/TextField";
import logo from "../../../assets/logo_horizontal.png";

export default function Login() {
  return (
    <LoginBox>
      <LogoImg src={logo} />
      <IdPwBox>
        <div>
          <TextField sx={{ mb: 6 }} label="이메일 아이디" />
          <TextField margin="20px" label="비밀번호" />
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
