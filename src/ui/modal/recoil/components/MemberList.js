import styled from "styled-components";
import {
  blue500,
  ygreen500,
  orange500,
  pink500,
  green500,
  purple500,
} from "../../../../core/colors";
import { useStudyListByDateAPI } from "../../../../feature/studies/studyListByDate/api/useStudyListByDateAPI";
import OtherStudyModal from "./OtherStudyModal";

const MEMBER_DATA = [
  {
    index: 1,
    name: "룰루",
    color: pink500,
  },
  {
    index: 2,
    name: "밍밍",
    color: orange500,
  },
  {
    index: 3,
    name: "고래",
    color: blue500,
  },
  {
    index: 4,
    name: "고양이",
    color: ygreen500,
  },
  {
    index: 5,
    name: "토끼",
    color: green500,
  },
  {
    index: 6,
    name: "가재",
    color: purple500,
  },
];

// export default function MemberList() {
//   const renderStudyListByDate = () => {
//     const result = [];
//     for (let i = 3; i < 6; i++) {
//       if (ranking[i]) result.push(<div>앙뇽</div>);
//     }
//     return result;
//   };
//   return renderStudyListByDate();
// }
