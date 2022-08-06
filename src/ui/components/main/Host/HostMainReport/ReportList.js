import styled from "styled-components";
import { gray100 } from "../../../../../core/colors";
import ReportBox from "./ReportBox";

const REPORT_DATA = [
  {
    index: "01",
    date: "22.03.31",
    reporter: "김아연",
    reported: "박태희",
    crtidate: "2022년 3월 26일자",
  },
  {
    index: "02",
    date: "22.04.03",
    reporter: "박태희",
    reported: "최이현",
    crtidate: "2022년 3월 28일자",
  },
  {
    index: "03",
    date: "22.04.07",
    reporter: "최이현",
    reported: "김아연",
    crtidate: "2022년 4월 03일자",
  },
  {
    index: "04",
    date: "22.04.15",
    reporter: "정가은",
    reported: "박훈",
    crtidate: "2022년 4월 10일자",
  },
  {
    index: "05",
    date: "22.04.21",
    reporter: "이소리",
    reported: "박훈",
    crtidate: "2022년 4월 16일자",
  },
  {
    index: "06",
    date: "22.05.01",
    reporter: "유가현",
    reported: "이소리",
    crtidate: "2022년 4월 26일자",
  },
  {
    index: "05",
    date: "22.03.31",
    reporter: "가재",
    reported: "시바",
    crtidate: "2022년 3월 26일자",
  },
  {
    index: "06",
    date: "22.03.31",
    reporter: "가재",
    reported: "시바",
    crtidate: "2022년 3월 26일자",
  },
];

export default function ReportList() {
  return (
    <Wrapper>
      <ReportBox reportList={REPORT_DATA} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  height: 335px;
  background-color: ${gray100};
  border: 3px solid black;
  border-radius: 5px;
  align-items: stretch;
  overflow: scroll;
  overflow-x: hidden;
  /* scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`;
