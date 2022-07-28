import styled from "styled-components";

import logo from "../../assets/logo_horizontal.png";
import pic from "../../assets/web_explanation_pic.png";
import SignInfo from "./../components/login/SignInfo";

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

        <Pic src={pic} />
      </Wrapper>
    </div>
  );
}
const LogoImg = styled.img`
  margin-bottom: 40.31px;
  justify-content: center;
`;

const Pic = styled.img`
  height: 750px;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const LeftContent = styled.div`
  width: 400rem;

  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  margin-left: 15rem;
  margin-top: 7rem;
`;
