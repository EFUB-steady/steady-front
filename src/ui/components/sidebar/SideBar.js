import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import MakeNewStudyBtn from "../buttons/study/MakeNewStudyBtn";
import Penalty from "./Penalty";
import SideBarStudyList from "./SideBarStudyList";
import SideLogoBox from "./SideLogoBox";

export default function SideBar() {
  return (
    <Wrapper>
      <SideBarBox>
        <SideLogoBox />

        <SideBarStudyList />

        <Divider />

        <Penalty />

        <MakeNewStudyBtn />
      </SideBarBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${gray100};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 198px;
  z-index: 10;
`;

const SideBarBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0;
`;

const Divider = styled.div`
  width: 168px;
  height: 3px;
  border-radius: 5px;
  margin-top: 23px;
  background-color: black;
`;
