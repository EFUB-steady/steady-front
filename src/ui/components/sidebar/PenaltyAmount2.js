import { Row } from "../commons/Row";
import { Body2, Subtitle2 } from "../../../core/texts";
import styled from "styled-components";
import { usePenalty } from "../../../feature/penalty/recoil/usePenalty";

export default function PenaltyAmount() {
  const { penalty } = usePenalty();

  const renderLastFine = () => {
    let result = 0;
    for (let i = 0; i < penalty.length; i++) {
      result = result + penalty[i].lastFine;
    }
    return result;
  };

  return (
    <Row>
      <Body2>{renderLastFine()}</Body2>
      <div style={{ width: 5 }} />
      <Subtitle2>원</Subtitle2>
    </Row>
  );
}

const Button = styled.button`
  width: 77px;
  height: 130px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
