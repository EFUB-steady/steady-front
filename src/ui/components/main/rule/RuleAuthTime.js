import styled from "styled-components";
import { Body2, Subtitle2 } from "../../../../core/texts";
import { Row } from "../../commons/Row";

export default function RuleAuthTime() {
  return (
    <>
      <WhiteBox>
        <Body2>오전</Body2>
      </WhiteBox>
      <Row>
        <WhiteBox>
          <Body2>00</Body2>
        </WhiteBox>
        <Subtitle2>시</Subtitle2>
      </Row>
      <Row>
        <WhiteBox>
          <Body2>00</Body2>
        </WhiteBox>
        <Subtitle2>분</Subtitle2>
      </Row>
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
