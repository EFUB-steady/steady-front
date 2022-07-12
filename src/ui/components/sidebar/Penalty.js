import styled from "styled-components";
import { Row } from "../commons/Row";
import { Subtitle2 } from "../../../core/texts";
import coin from "../../../assets/icon_coin.png";
import PenaltyAmount from "./PenaltyAmount";

export default function Penalty() {
  return (
    <PenaltyBox>
      <Row>
        <Subtitle2>이번주 벌금 정산</Subtitle2>
        <Coin src={coin} />
      </Row>

      <PenaltyAmount />
    </PenaltyBox>
  );
}

const PenaltyBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 23px;
  align-items: center;
`;
const Coin = styled.img`
  width: 15px;
  height: 18px;
  margin-left: 5px;
`;
