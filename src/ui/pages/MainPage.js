import styled from "styled-components";
import Header from "../components/header/Header";
import Mcalendar from "../components/main/calendar/Mcalendar";
import Notice from "../components/main/notice/Notice";
import Ranking from "../components/main/ranking/Ranking";
import Rule from "../components/main/rule/Rule";
import StudyInfo from "../components/main/study-info/StudyInfo";
import SideBar from "../components/sidebar/SideBar";
import { useYesterdayStudyModal } from "./../modal/recoil/hooks/useModals";

export default function MainPage() {
  const { openModal } = useYesterdayStudyModal();
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <div onClick={openModal()}>hi~~~~</div>
        <StudyInfo />
        <Mcalendar />
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
  display: flex;
  width: 100%;
  flex-direction: column;
  margin: 58px 90px 58px 288px;
`;
