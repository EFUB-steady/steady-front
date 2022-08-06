import { Row } from "../commons/Row";
import { Body2, Subtitle2 } from "../../../core/texts";
import styled from "styled-components";
import { usePenaltyAPI } from "../../../feature/penalty/api/usePenaltyAPI";
import { usePenalty } from "../../../feature/penalty/recoil/usePenalty";
import { useEffect } from "react";

export default function PenaltyAmount() {
  const { penalty } = usePenalty();
  const { penaltyAPI } = usePenaltyAPI();

  useEffect(() => {
    penaltyAPI();
  }, []);

  return (
    <Row>
      <Body2>{penalty.lastFine}</Body2>
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
