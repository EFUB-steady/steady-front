import styled from "styled-components";

import ReportList from "./ReportList";
import icon from "../../../../../assets/icon_alert.png";
import MainSubTitle from "../../MainSubTitle";

export default function Report() {
  return (
    <Wrapper>
      <MainSubTitle iconSrc={icon} title={"00월 0주차 신고 내역"} />
      <div style={{ marginBottom: "15px" }}></div>
      <ReportList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
