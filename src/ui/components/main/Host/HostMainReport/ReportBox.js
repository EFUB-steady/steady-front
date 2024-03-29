import styled from "styled-components";
import ReportItem from "./ReportItem";

export default function ReportBox({ reportList }) {
  return (
    <Wrapper>
      <ReportItem report={reportList[0]} />
      <Divider />
      <ReportItem report={reportList[1]} />
      <Divider />
      <ReportItem report={reportList[2]} />
      <Divider />
      <ReportItem report={reportList[3]} />
      <Divider />
      <ReportItem report={reportList[4]} />
      <Divider />
      <ReportItem report={reportList[5]} />
      <Divider />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 24px;
  padding-bottom: 24px;
  height: 600px;
  width: 100%;
`;

const Divider = styled.div`
  height: 16px;
  display: flex;
`;
