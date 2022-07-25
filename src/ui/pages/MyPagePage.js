import styled from "styled-components";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import ListBar from "../components/mypage/ListBar";
import ToDo from "../components/mypage/ToDo";
import MyInfo from "../components/mypage/MyInfo";
import MyAuthCal from "../components/mypage/MyAuthCal";
import DateAndBtn from "../components/mypage/DateAndBtn";

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
          </RightContent>
        </MidContent>
      </MainContext>
      <ListBar />
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const MainContext = styled.div`
  margin: 58px 90px 58px 288px;
`;
const MidContent = styled.div`
  width: 1000px;
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
`;
const FooterContent = styled.div`
  position: absolute;
  bottom: 0;
`;
//이렇게 내리니깐 스크롤바가 생기네..ㅠ
