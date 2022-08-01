import styled from "styled-components";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import ListBar from "../components/mypage/ListBar";
import ToDo from "../components/mypage/ToDo";
import MyInfo from "../components/mypage/MyInfo";
import MyAuthCal from "../components/mypage/MyAuthCal";
import DateAndBtn from "../components/mypage/DateAndBtn";
import MyAuthList from "../components/mypage/MyAuthList";

export default function MyPagePage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <DateAndBtn />
        <MidContent>
          <LeftContent>
            <ToDo />
            <MyInfo />
          </LeftContent>
          <RightContent>
            <MyAuthCal />
            <MyAuthList />
          </RightContent>
        </MidContent>
      </MainContext>
      <FooterContent>
        {/* <TitleText>나의 참여 스터디</TitleText> */}
        <ListBar />
      </FooterContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MainContext = styled.div`
  margin: 58px 90px 58px 288px;
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
  margin-top: 2rem;
`;
const FooterContent = styled.div`
  /* position: absolute;
  bottom: 0; */
`;
//이렇게 내리니깐 스크롤바가 생기네..ㅠ

// const TitleText = styled.div`
//   width: 200px;
//   height: 21px;

//   font-family: "Pretendard";
//   font-style: normal;
//   font-weight: 700;
//   font-size: 21px;
//   line-height: 100%;
//   margin-bottom: 45px;
// `;
