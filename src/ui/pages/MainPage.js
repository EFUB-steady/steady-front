import { useEffect } from "react";
import styled from "styled-components";
import { useSelectedStudyAPI } from "../../feature/studies/studySelect/api/useSelectedStudyAPI";
import { useSelectedStudyId } from "../../feature/studies/studySelect/recoil/useSelectedStudy";
import Header from "../components/header/Header";
import Mcalendar from "../components/main/calendar/Mcalendar";
import Notice from "../components/main/notice/Notice";
import Ranking from "../components/main/ranking/Ranking";
import Rule from "../components/main/rule/Rule";
import StudyInfo from "../components/main/study-info/StudyInfo";
import SideBar from "../components/sidebar/SideBar";

export default function MainPage() {
  const { selectedStudyId } = useSelectedStudyId();
  const { selectedStudyAPI } = useSelectedStudyAPI();

  useEffect(() => {
    selectedStudyAPI();
  }, [selectedStudyId]);

  // TODO: StudyInfo 처럼 스터디 정보별로 다르게 출력되도록 수정하기
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
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
