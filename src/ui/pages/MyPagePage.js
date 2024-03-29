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
import CustomLink from "../components/commons/CustomLink";
import { useStudyListByUserAPI } from "../../feature/studies/studyListByUser/api/useStudyListByUserAPI";
import { useEffect } from "react";
import { useStudyListDate } from "../../feature/studyList/recoil/useStudyListDate";
import UploadStudyModal from "../modal/modals/UploadStudyModal";
function MyPagePage() {
  const [isNow, setIsNow] = useState(true);
  const { studyListByUserAPI } = useStudyListByUserAPI();
  const { selectedDate, setSelectedDate } = useStudyListDate();
  const [isOpen, setIsOpen] = useState(false);

  const handleConfirm = () => {
    isNow ? setIsNow(false) : setIsNow(true);
  };

  useEffect(() => {
    studyListByUserAPI();
  }, [selectedDate]);

  const onNavButtonClickHandler = () => {
    setSelectedDate(new Date());
    setIsOpen(true);
  };

  return (
    <Wrapper>
      <UploadStudyModal isOpen={isOpen} setIsOpen={setIsOpen} />

      <SideBar />
      <MainContext>
        <Header />
        <TitleWrapper>
          <DateAndBtn />
          {/* <CustomLink to="/authpage"> */}
          <NavButton
            onClick={() => {
              onNavButtonClickHandler();
            }}
          >
            오늘의 스터디 인증하기
          </NavButton>
          {/* </CustomLink> */}
        </TitleWrapper>
        <MidContent>
          <LeftContent>
            <ToDo />
            <InfoHeader>
              <InfoText>내 정보</InfoText>
              <div style={{ marginBottom: "5px" }}>
                <Button onClick={() => handleConfirm()}>
                  {isNow ? <ModifyInfoBtn /> : <ModifyCompleteBtn />}
                </Button>
              </div>
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
  justify-content: center;
  margin-left: 3rem;
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
  height: 100px;
  padding-top: 30px;
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
`;

const Button = styled.button``;

const InfoConentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const NavButton = styled.button`
  width: 200px;
  height: 40px;
  background: black;
  border-radius: 5px;
  border: 3px solid black;
  color: white;
  margin: 4px;
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;

  &:hover {
    background: white;
    color: black;
  }
  &:active {
    background: white;
    color: black;
  }
`;

const TitleWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  margin-top: 1.5rem;
`;
