import styled from "styled-components";
import { blue500, gray100, orange500, pink500 } from "../../../../core/colors";
import OtherStudyModal from "./OtherStudyModal";

const MEMBER_DATA = [
  {
    index:1,
    name: "룰루",
    color: pink500,
  },
  {
    index:2,
    name: "밍밍",
    color: orange500,
  },
  {
    index:3,
    name: "고래",
    color: blue500,
  },

]

export default function MemberList() {
  return(
    <div>
    <OtherStudyModal memberList={MEMBER_DATA}/>
    </div>
  );
}