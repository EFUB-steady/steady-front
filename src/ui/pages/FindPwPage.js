import styled from "styled-components";
import logo from "../../assets/logo_horizontal.png";
import Indexes from "../components/login/Indexes";
import GoBackBtn from "../components/buttons/common/GoBackBtn";

import FindPw1st from "../components/login/FindPw1st";
import FindPw2nd from "../components/login/FindPw2nd";
import React, { useState } from "react";
import BackToLoginBtn from "./../components/buttons/user/BackToLoginBtn";
import UserCheckBtn from "./../components/buttons/user/UserCheckBtn";
function FindPwPage() {
  const [isNow, setIsNow] = useState(true);
  const handleConfirm = () => {
    setIsNow(false);
  };
  return (
    <>
      <GoBackBtn />
      <Wrapper>
        <LogoImg src={logo} />
        <Indexes />

        <MainContentWrapper>
          {isNow ? <FindPw1st /> : <FindPw2nd />}
        </MainContentWrapper>
        <Button onClick={() => handleConfirm()}>
          {isNow ? <UserCheckBtn /> : <BackToLoginBtn />}
        </Button>
      </Wrapper>
    </>
  );
}
export default FindPwPage;
const LogoImg = styled.img`
  padding: 2rem;
`;

const Wrapper = styled.div`
  place-items: center;
  display: grid;
  padding: 5rem;
  border-radius: 1rem;
`;

const MainContentWrapper = styled.div`
  /* display: flex;
  flex-direction: row;
  padding-bottom: 8px;
  padding: 2rem; */
`;
const Button = styled.button`
  /* width: 400px;
  height: 50px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px; */
`;
