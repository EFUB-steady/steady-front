import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import ListBarStudyList from "./ListBarStudyList";
import ArrowBtn from "./ArrowBtn";
import ArrowBtn2 from "./ArrowBtn2";

// 폴더 이름 변경 커밋

export default function ListBar() {
  return (
    <ListBarBox>
      <ArrowBtn />
      <ListBarStudyList />
      <ArrowBtn2 />
    </ListBarBox>
  );
}

const ListBarBox = styled.div`
  background-color: ${gray100};
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 1200px;
  height: 200px;
  left: 200px;
  top: 824px;
`;
