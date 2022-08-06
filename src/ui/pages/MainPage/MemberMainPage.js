import { useEffect } from "react";
import styled from "styled-components";
import { useSelectedStudyAPI } from "../../../feature/studies/studySelect/api/useSelectedStudyAPI";
import { usePenaltyAPI } from "../../../feature/penalty/api/usePenaltyAPI";
import { useSelectedStudyId } from "../../../feature/studies/studySelect/recoil/useSelectedStudy";
import Header from "../../components/header/Header";
import Mcalendar from "../../components/main/calendar/Mcalendar";
import Notice from "../../components/main/notice/Notice";
import Ranking from "../../components/main/ranking/Ranking";
import Rule from "../../components/main/rule/Rule";
import StudyInfo from "../../components/main/study-info/StudyInfo";

export default function MemberMainPage() {
  const { selectedStudyId } = useSelectedStudyId();
  const { selectedStudyAPI } = useSelectedStudyAPI();
  const { penaltyAPI } = usePenaltyAPI();

  useEffect(() => {
    selectedStudyAPI();
    penaltyAPI();
  }, [selectedStudyId]);

  return (
    <MainContext>
      <Header />
      <StudyInfo />
      <Mcalendar />
      <Ranking />
      <Rule />
      <Notice />
    </MainContext>
  );
}

const MainContext = styled.div`
  display: flex;
  width: 100%;
  min-width: 987px;
  flex-direction: column;
  margin: 58px 90px 58px 288px;
`;
