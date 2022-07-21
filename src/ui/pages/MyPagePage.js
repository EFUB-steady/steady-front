import styled from "styled-components";
import Header from "../components/header/Header";
import SideBar from "../components/sidebar/SideBar";
import Listbar from "../components/mypage/Listbar";
import ToDo from "../components/mypage/ToDo";
import Info from "../components/mypage/Info";

export default function MyPagePage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <div>My Page</div>
        <Listbar />
        <LeftContent>
          <ToDo />
          <Info />
        </LeftContent>
      </MainContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MainContext = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 58px 90px 58px 288px;
`;

const LeftContent = styled.div`
  display: flex;
  width: 320px;
  height: 172px;
`;
