import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import MakeNewStudyBtn from "../buttons/study/MakeNewStudyBtn";
import Penalty from "./Penalty";
import SideBarStudyList from "./SideBarStudyList";
import SideLogoBox from "./SideLogoBox";

export default function SideBar() {
  return (
    <Wrapper>
      <SideLogoBox />

      <SideBarStudyList />

      <Divider />

      <Penalty />

      <MakeNewStudyBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100vh;
  padding: 40px 0;
  background-color: ${gray100};
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 198px;
  z-index: 10;
`;

const Divider = styled.div`
  width: 168px;
  height: 3px;
  border-radius: 5px;
  margin-top: 20px;
  background-color: black;
`;
