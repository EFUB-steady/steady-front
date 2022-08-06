import { useEffect } from "react";
import styled from "styled-components";
import { useSelectedStudyAPI } from "../../../feature/studies/studySelect/api/useSelectedStudyAPI";
import {
  useSelectedStudyId,
  useSelectedStudyIsLeader,
} from "../../../feature/studies/studySelect/recoil/useSelectedStudy";
import SideBar from "../../components/sidebar/SideBar";
import HostMainPage from "./HostMainPage";
import MemberMainPage from "./MemberMainPage";

export default function MainPageCenter() {
  const { selectedStudyId } = useSelectedStudyId();
  const { selectedStudyAPI } = useSelectedStudyAPI();
  const { isLeader } = useSelectedStudyIsLeader();

  useEffect(() => {
    selectedStudyAPI();
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
