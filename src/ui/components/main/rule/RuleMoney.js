import { Body2, Subtitle2 } from "../../../../core/texts";
import styled from "styled-components";

export default function RuleMoney() {
  return (
    <>
      <WhiteBox>
        <Body2>0000</Body2>
      </WhiteBox>
      <Subtitle2>원</Subtitle2>
    </>
  );
}

const WhiteBox = styled.div`
  background-color: white;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  margin-right: 10px;
`;
