import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import MakeNewStudyBtn from "../buttons/study/MakeNewStudyBtn";
import Penalty from "./Penalty";
import SideBarStudyList from "./SideBarStudyList";
import SideLogoBox from "./SideLogoBox";

export default function SideBar() {
  return (
    <SideBarBox>
      <SideLogoBox />

      <SideBarStudyList />

      <Divider />

      <Penalty />

      <MakeNewStudyBtn />
    </SideBarBox>
  );
}

const SideBarBox = styled.div`
  background-color: ${gray100};
  position: fixed;
  width: 198px;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Divider = styled.div`
  width: 168px;
  height: 3px;
  border-radius: 5px;
  margin-top: 23px;
  background-color: black;
`;
