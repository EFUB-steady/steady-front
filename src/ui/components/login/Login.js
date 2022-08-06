import styled from "styled-components";
import LoginBtn from "./../buttons/user/LoginBtn";
import TextField from "@mui/material/TextField";
import logo from "../../../assets/logo_horizontal.png";
import CustomLink from "../commons/CustomLink";
import { useLoginInput } from "../../../feature/login/recoil/useLoginInput";
import TestModal from "../../modal/modals/TestModal";

// 로그인 배치
export default function Login() {
  const { email, password, setEmail, setPassword } = useLoginInput();

  return (
    <LoginBox>
      <LogoImg src={logo} />
      <IdPwBox>
        <IdPwBoxLeft>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            sx={{ mb: 2, mt: 4 }}
            label="이메일 아이디"
            name="id"
            fullWidth
          />
          <TextField
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            margin="20px"
            label="비밀번호"
            name="pw"
            type="password"
            fullWidth
          />
        </IdPwBoxLeft>
        <IdPwBoxRight>
          <LoginBtn sx={{ mb: 2, mt: 4 }} />
        </IdPwBoxRight>
      </IdPwBox>
      <div style={{ display: "flex" }}>
        <CustomLink to="/findid">
          <Button>
            <LoginHelpText> 아이디/비밀번호 찾기</LoginHelpText>
          </Button>
        </CustomLink>
        <CustomLink to="/signup">
          <Button>
            <LoginHelpText> 회원 가입하기</LoginHelpText>
          </Button>
        </CustomLink>
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
const LoginBox = styled.div`
  width: 500px;
  left: 200px;
  top: 415px;
`;

const IdPwBox = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100%;
`;

const IdPwBoxLeft = styled.div`
  order: 1;
  width: 70%;
`;

const IdPwBoxRight = styled.div`
  order: 2;
  width: 30%;
  padding: 1.6em;
`;

const LogoImg = styled.img``;

const Button = styled.button``;
