import styled from "styled-components";
import { gray100 } from "../../../../../core/colors";
import ReportBox from "./ReportBox";

const REPORT_DATA = [
  {
    index: "01",
    date: "22.03.31",
    reporter: "가재",
    reported: "시바",
    crtidate: "2022년 3월 26일자",
  },
  {
    index: "02",
    date: "22.03.31",
    reporter: "가재",
    reported: "시바",
    crtidate: "2022년 3월 26일자",
  },
  {
    index: "03",
    date: "22.03.31",
    reporter: "가재",
    reported: "시바",
    crtidate: "2022년 3월 26일자",
  },
  {
    index: "04",
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
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
