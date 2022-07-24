import styled from "styled-components";

import logo from "../../assets/logo_horizontal.png";
import pic from "../../assets/web_explanation_pic.png";
import SignInfo from "./../components/login/SignInfo";
import { gray300 } from "../../core/colors";
import GoBackBtn from "../components/buttons/common/GoBackBtn";

export default function JoinPage() {
  return (
    <div>
      <Wrapper>
        <GoBackBtn />
        <LeftContent>
          <LogoImg src={logo} />
          <SignInfo />
        </LeftContent>
        <RightContent>
          <Pic src={pic} />
        </RightContent>
      </Wrapper>
    </div>
  );
}
const LogoImg = styled.img`
  margin-bottom: 40.31px;
`;

const Pic = styled.img`
  width: 500px;
  height: 750px;
`;

const Wrapper = styled.div`
  /* display: flex;
  width: 90vw;
  height: 100vh;
  margin: 40px 90px;
  padding-left: 0px; */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  width: 400rem;
  float: left;
  box-sizing: border-box;
  margin-top: 200px;
  margin-left: 350px;

  padding-right: 215px;
`;

const RightContent = styled.div`
  position: absolute;
  width: 640px;
  height: 1024px;
  left: 1250px;
  top: 0px;

  background: ${gray300};
`;
