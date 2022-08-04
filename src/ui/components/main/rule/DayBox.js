import styled from "styled-components";
import { Body2, Body3 } from "../../../../core/texts";

export default function DayBox({ day }) {
  return (
    <WhiteBox>
      <Body3>{day}</Body3>
    </WhiteBox>
  );
}

const WhiteBox = styled.div`
  display: flex;
  background-color: white;
  align-items: center;
  height: 35px;
  padding: 0 8px;
  margin-right: 5px;
`;
