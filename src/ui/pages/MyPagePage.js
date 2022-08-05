import styled from "styled-components";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import ListBar from "../components/mypage/ListBar";
import ToDo from "../components/mypage/ToDo";
import ModifyMyInfo from "../components/mypage/ModifyMyInfo";
import MyAuthCal from "../components/mypage/MyAuthCal";
import DateAndBtn from "../components/mypage/DateAndBtn";
import MyAuthList from "../components/mypage/MyAuthList";
import MyInfo from "../components/mypage/MyInfo";
import ModifyInfoBtn from "../components/buttons/user/ModifyInfoBtn";
import React, { useState } from "react";
import ModifyCompleteBtn from "../components/buttons/user/ModifyCompleteBtn";

function MyPagePage() {
  const [isNow, setIsNow] = useState(true);

  const handleConfirm = () => {
    isNow ? setIsNow(false) : setIsNow(true);
  };
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <DateAndBtn />
        <MidContent>
          <LeftContent>
            <ToDo />
            <InfoHeader>
              <InfoText>내 정보</InfoText>
              <Button onClick={() => handleConfirm()}>
                {isNow ? <ModifyInfoBtn /> : <ModifyCompleteBtn />}
              </Button>
            </InfoHeader>
            <InfoConentWrapper>
              {isNow ? <MyInfo /> : <ModifyMyInfo />}
            </InfoConentWrapper>
          </LeftContent>
          <RightContent>
            <MyAuthCal />
            <MyAuthList />
          </RightContent>
        </MidContent>
      </MainContext>
      <FooterContent>
        <TitleText>나의 참여 스터디</TitleText>
        <ListBar />
      </FooterContent>
    </Wrapper>
  );
}

export default MyPagePage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const MainContext = styled.div`
  display: flex;
  width: 75%;
  min-width: 987px;
  flex-direction: column;
  margin: 58px 90px 0px 288px;
`;

const MidContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;
const LeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  border-right: 3px solid black;
`;

const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  //margin-top: 2rem;
`;
const FooterContent = styled.div`
  width: 75%;
  margin-left: 198px;
`;
const TitleText = styled.div`
  width: 200px;
  height: 21px;
  margin-left: 40px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
  margin-bottom: 18px;
`;

const InfoHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  width: 380px;
  height: 120px;
  //background-color: skyblue;
  padding-top: 40px;
  margin-right: 20px;
`;

const InfoText = styled.div`
  width: 150px;
  height: 30px;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  margin-top: 15px;
  //background-color: pink;
`;

const Button = styled.button`
  /* width: 400px;
  height: 50px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px; */
  //background-color: yellow;
`;

const InfoConentWrapper = styled.div``;
