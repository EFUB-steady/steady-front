import styled from "styled-components";
import Login from "../components/login/Login";
import ExplanationPic from "../components/login/ExplanationPic";

export default function LoginPage() {
  return (
    <div>
      <Wrapper>
        <LeftContent>
          <Login />
        </LeftContent>
        <RightContent>
          <ExplanationPic />
        </RightContent>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;

  width: 200vw;
  height: 100vh;
`;
const LeftContent = styled.div``;

const RightContent = styled.div`
  flex-direction: column;
`;
