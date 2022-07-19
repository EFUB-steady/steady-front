import styled from "styled-components";
import GoBackBtn from "../components/buttons/common/GoBackBtn";
import DaysSelect from "../components/MakeNew/DaysSelect";
import Members from "../components/MakeNew/Members";
import NoticeInput from "../components/MakeNew/NoticeInput";
import StudyInfoInput from "../components/MakeNew/StudyInfoInput";
import SideBar from "../components/sidebar/SideBar";

export default function MakeNewPage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <GoBackBtn />
        <StudyInfoInput />
        <DaysSelect />
        <Members />
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
