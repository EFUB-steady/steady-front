import styled from "styled-components";
import logo from "../../assets/logo_horizontal.png";
import Indexes from "../components/login/Indexes";
import GoBackBtn from "../components/buttons/common/GoBackBtn";
import React, { useState, Link } from "react";
import FindId1st from "../components/login/FindId1st";
import FindId2nd from "../components/login/FindId2nd";

function FindIdPage() {
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
          {isNow ? <FindId1st /> : <FindId2nd />}
        </MainContentWrapper>
        <Button onClick={() => handleConfirm()}>확인</Button>
      </Wrapper>
    </>
  );
}

export default FindIdPage;

const MainContentWrapper = styled.div``;
const LogoImg = styled.img`
  padding: 2rem;
`;

const Wrapper = styled.div`
  place-items: center;
  display: grid;
  padding: 5rem;
  border-radius: 1rem;
`;

const Button = styled.button`
  width: 400px;
  height: 50px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
