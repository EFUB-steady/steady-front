import styled from "styled-components";
import Login from "../components/login/Login";
import ExplanationPic from "../components/login/ExplanationPic";

export default function LoginPage() {
  return (
    <div>
      <LoginAndPic>
        <Login />

        <ExplanationPic />
      </LoginAndPic>
    </div>
  );
}

const LoginAndPic = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 100px;
`;
