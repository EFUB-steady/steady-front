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
  width: 50%;
  float: left;
  box-sizing: border-box;
  position: absolute;
  left: 10%;
  right: 10%;
  top: 30%;
  bottom: 30%;
`;

const RightContent = styled.div`
  position: absolute;
  width: 640px;
  height: 1024px;
  left: 800px;
  top: 0px;

  background: ${gray300};
`;
