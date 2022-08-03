import { useEffect } from "react";
import styled from "styled-components";
import { useMyStudyAPI } from "../../feature/studies/myStudy/api/useMyStudyAPI";
import Header from "../components/header/Header";
import Mcalendar from "../components/main/calendar/Mcalendar";
import Notice from "../components/main/notice/Notice";
import Ranking from "../components/main/ranking/Ranking";
import Rule from "../components/main/rule/Rule";
import StudyInfo from "../components/main/study-info/StudyInfo";
import SideBar from "../components/sidebar/SideBar";

export default function MainPage() {
  const { myStudyAPI } = useMyStudyAPI({
    onSuccess: () => {
      console.log("myStudyAPI success!!");
    },
    onFail: () => {
      console.log("myStudyAPI fail....");
    },
  });

  useEffect(() => {
    myStudyAPI();
  }, []);

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
