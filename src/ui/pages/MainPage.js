import styled from "styled-components";
import Header from "../components/header/Header";
import Calendar from "../components/main/calendar/Calendar";
import Notice from "../components/main/notice/Notice";
import Ranking from "../components/main/ranking/Ranking";
import Rule from "../components/main/rule/Rule";
import StudyInfo from "../components/main/study-info/StudyInfo";
import SideBar from "../components/sidebar/SideBar";

export default function MainPage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <StudyInfo />
        <Calendar />
        <Ranking />
        <Rule />
        <Notice />
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
  flex-direction: column;
  margin: 58px 90px;
  padding-left: 198px;
`;
