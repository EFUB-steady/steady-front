import styled from "styled-components";
import Login from "../components/login/Login";
import ExplanationPic from "../components/login/ExplanationPic";
import { gray300 } from "../../core/colors";

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
  width: 100%;
  height: 100%;
`;
const LeftContent = styled.div`
  width: 70%;
  float: left;
  box-sizing: border-box;
`;

const RightContent = styled.div`
  width: 30%;
  float: right;
  box-sizing: border-box;
  background: ${gray300};
`;
