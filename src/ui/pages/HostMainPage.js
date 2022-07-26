import styled from "styled-components";
import Header from "../components/header/Header";
import Mcalendar from "../components/main/calendar/Mcalendar";
import Notice from "../components/main/notice/Notice";
import HostRanking from "../components/main/Host/HostRainking";
import Rule from "../components/main/rule/Rule";
import StudyInfo from "../components/main/study-info/StudyInfo";
import Report from "../components/main/Host/HostMainReport/Report";
import SideBar from "../components/sidebar/SideBar";
import StudySetting from "../components/main/Host/StudySetting";

export default function HostMainPage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <StudySetting/>
        <StudyInfo />
        <Mcalendar />
        <HostRanking />
        <Report/>
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
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 58px 90px 58px 288px;
`;
