import styled from "styled-components";
import ExplanationPic from "../components/login/ExplanationPic";
import logo from "../../assets/logo_horizontal.png";

import SignInfo from "./../components/login/SignInfo";
export default function JoinPage() {
  return (
    <div>
      <Wrapper>
        <LeftContent>
          <LogoImg src={logo} />
          <SignInfo />
        </LeftContent>
        <RightContent>
          <ExplanationPic />
        </RightContent>
      </Wrapper>
    </div>
  );
}
const LogoImg = styled.img``;
const RightContent = styled.div``;
const LeftContent = styled.div`
  margin: 300px;
  padding-left: 0px;
`;
const Wrapper = styled.div`
  display: flex;
  width: 90vw;
  height: 100vh;
  margin: 40px 90px;
  padding-left: 0px;
`;
