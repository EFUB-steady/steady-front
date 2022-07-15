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
  width: 90vw;
  height: 100vh;
  margin: 40px 90px;
  padding-left: 0px;
  background-color: gray;
`;
const LeftContent = styled.div`
  margin: 300px;
  padding-left: 0px;
`;

const RightContent = styled.div``;
