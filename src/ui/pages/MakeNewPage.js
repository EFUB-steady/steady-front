import { Divider } from "@mui/material";
import styled from "styled-components";
import GoBackBtn from "../components/buttons/common/GoBackBtn";
import DaysSelect from "../components/MakeNew/DaysSelect";
import MembersInput from "../components/MakeNew/MembersInput";
import NoticeInput from "../components/MakeNew/NoticeInput";
import RuleInput from "../components/MakeNew/ruleInput/RuleInput";
import StudyInfoInput from "../components/MakeNew/StudyInfoInput";
import SideBar from "../components/sidebar/SideBar";

export default function MakeNewPage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <GoBackBtn />
        <StudyInfoInput />
        <Divider
          style={{ marginTop: 15, marginBottom: 40, backgroundColor: "black" }}
        />
        <DaysSelect />
        <RuleInput />
        <Divider
          style={{ marginTop: 15, marginBottom: 40, backgroundColor: "black" }}
        />
        <MembersInput />
        <Divider
          style={{ marginTop: 15, marginBottom: 40, backgroundColor: "black" }}
        />
        <NoticeInput />
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
