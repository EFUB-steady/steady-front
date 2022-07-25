import styled from "styled-components";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import ListBar from "../components/mypage/ListBar";
import ToDo from "../components/mypage/ToDo";
import MyInfo from "../components/mypage/MyInfo";
import MyAuthList from "../components/mypage/MyAuthList";
import DateAndBtn from "../components/mypage/DateAndBtn";
import Search from "../components/mypage/Search";

export default function AuthPage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <DateAndBtn />
        <MidContent>
          <LeftContent>
            <Search />
          </LeftContent>
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
`;
const FooterContent = styled.div`
  position: absolute;
  bottom: 0;
`;
