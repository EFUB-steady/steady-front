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
  margin: 0px 90px;
  padding: 10px;
`;
const LeftContent = styled.div`
  width: 50;
  height: 50;
  margin: 300px;
  padding-left: 0px;
`;

const RightContent = styled.div``;
