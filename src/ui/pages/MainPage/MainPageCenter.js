import { useEffect } from "react";
import styled from "styled-components";
import { useNoticeOneAPI } from "../../../feature/notices/noticeOne/api/useNoticeOneAPI";
import { useRankingAPI } from "../../../feature/ranking/api/useRankingAPI";
import { useSelectedStudyAPI } from "../../../feature/studies/studySelect/api/useSelectedStudyAPI";
import {
  useSelectedStudyId,
  useSelectedStudyIsLeader,
} from "../../../feature/studies/studySelect/recoil/useSelectedStudy";
import { useUserAPI } from "../../../feature/user/api/useUserAPI";
import SideBar from "../../components/sidebar/SideBar";
import HostMainPage from "./HostMainPage";
import MemberMainPage from "./MemberMainPage";

export default function MainPageCenter() {
  const { selectedStudyId } = useSelectedStudyId();
  const { selectedStudyAPI } = useSelectedStudyAPI();
  const { isLeader } = useSelectedStudyIsLeader();
  const { noticeOneAPI, isLoading: isNoticeLoading } = useNoticeOneAPI();
  const { rankingAPI, isLoading: isRankingLoading } = useRankingAPI();
  const { userAPI } = useUserAPI();

  useEffect(() => {
    selectedStudyAPI();
    rankingAPI();
    noticeOneAPI();
    userAPI();
  }, [selectedStudyId]);

  return (
    <Wrapper>
      <SideBar />
      {isLeader ? <HostMainPage /> : <MemberMainPage />}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
