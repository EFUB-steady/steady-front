import styled from "styled-components";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import ListBar from "../components/mypage/ListBar";
import DateAndBtn from "../components/mypage/DateAndBtn";
import Search from "../components/mypage/Search";
import CheckPic from "../components/mypage/CheckPic";
import CheckLink from "../components/mypage/CheckLink";

export default function AuthPage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <TitleWrapper>
          <DateAndBtn />

          <Button>저장하기</Button>
        </TitleWrapper>
        <MidContent>
          <LeftContent>
            <Search />
            <CheckPic />
          </LeftContent>
          <RightContent>
            <CheckLink />
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
  margin-top: 3rem;
`;
const LeftContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
`;

const RightContent = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  margin-top: 8.4rem;
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
const Button = styled.button`
  width: 100px;
  height: 40px;
  background: gray;
  border-radius: 5px;
  border: 3px solid gray;
  color: white;
  margin: 4px;
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
`;
const TitleWrapper = styled.div`
  display: flex;

  justify-content: space-between;
  margin-top: 1.5rem;
`;
