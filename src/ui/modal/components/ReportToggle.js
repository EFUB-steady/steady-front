import { format } from "date-fns";
import React from "react";
import styled from "styled-components";
import { Subtitle2, Subtitle5 } from "../../../core/texts";

export default function ReportToggle({ name, date }) {
  const formattedDate = format(new Date(date), "MM월 dd일자");
  return (
    <Wrapper>
      <Subtitle2 style={{ color: "white" }}>신고하기</Subtitle2>
      <div style={{ height: 10 }} />
      <Subtitle5 style={{ color: "white", textAlign: "center" }}>
        {name} 님의 {formattedDate}
        {"\n"}인증을 신고했습니다.
      </Subtitle5>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 115px;
  margin-top: 40px;
  width: 240px;
  height: 180px;
  background-color: rgba(1, 1, 1, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
