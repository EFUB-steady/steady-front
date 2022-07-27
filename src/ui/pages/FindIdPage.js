import styled from "styled-components";
import logo from "../../assets/logo_horizontal.png";
import Indexes from "../components/login/Indexes";
import { hintColor } from "../../core/colors";
import { Subtitle3 } from "../../core/texts";
import GoBackBtn from "../components/buttons/common/GoBackBtn";
import UserCheckBtn from "../components/buttons/user/UserCheckBtn";
import React, { useState } from "react";
import FindId1st from "../components/login/FindId1st";
import FindId2nd from "../components/login/FindId2nd";

function FindIdPage() {
  const [viewPage, setViewPage] = useState(true);

  return (
    <>
      <GoBackBtn />
      <Wrapper>
        <LogoImg src={logo} />
        <Indexes />
        <MainContentWrapper>
          {viewPage ? <FindId1st /> : <FindId2nd />}
        </MainContentWrapper>
        <UserCheckBtn
          onClick={() => {
            setViewPage(!true);
          }}
        >
          {" "}
          {viewPage ? <FindId1st /> : <FindId2nd />}
        </UserCheckBtn>
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
const Text = styled.div`
  width: 155px;
  height: 42px;
  display: flex;
  align-items: center;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
  padding: 1.5rem;
`;

const InputBox = styled.div`
  /*박스*/
  width: 240px;
  height: 42px;
  background: #eeeeee;
  border-radius: 5px;

  /*글씨*/
  color: ${hintColor};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  padding-left: 17.15px;
`;
