import styled from "styled-components";
import { Row } from "../commons/Row";
import { Subtitle3 } from "../../../core/texts";
import coin from "../../../assets/icon_coin.png";
import PenaltyAmount from "./PenaltyAmount";
import PenaltyAmount2 from "./PenaltyAmount2";

export default function Penalty() {
  return (
    <PenaltyBox>
      <Row>
        <Coin src={coin} />
        <Subtitle3>이번주 벌금</Subtitle3>
      </Row>

      <PenaltyAmount />
      <div
        style={{
          height: 20,
        }}
      />
      <Row>
        <Coin src={coin} />
        <Subtitle3>지난주 벌금</Subtitle3>
      </Row>

      <PenaltyAmount2 />
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
  width: 13px;
  height: 15px;
  margin-right: 5px;
  margin-top: -4px;
`;
