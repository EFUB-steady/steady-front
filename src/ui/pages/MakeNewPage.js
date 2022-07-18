import styled from "styled-components";
import GoBackBtn from "../components/buttons/common/GoBackBtn";
import StudyInfoInput from "../components/MakeNew/StudyInfoInput";
import SideBar from "../components/sidebar/SideBar";

export default function MakeNewPage() {
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <GoBackBtn />
        <StudyInfoInput />
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
