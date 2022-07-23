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
        <LeftContent>
          <ToDo />
          <Info />
        </LeftContent>
        <FooterContent>
          <Listbar />
        </FooterContent>
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
  width: 100%;
  height: 150%;
`;
// LeftContent 대략 이 정도 비율이면 될까?

const FooterContent = styled.div`
  height: 200px;
  border-top: 3px solid black;
`;
