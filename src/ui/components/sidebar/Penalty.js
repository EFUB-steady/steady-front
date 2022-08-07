import styled from "styled-components";
import { Row } from "../commons/Row";
import { Subtitle2 } from "../../../core/texts";
import coin from "../../../assets/icon_coin.png";
import PenaltyAmount from "./PenaltyAmount";

export default function Penalty() {
  return (
    <PenaltyBox>
      <Row>
        <Coin src={coin} />
        <Subtitle2>이번주 벌금</Subtitle2>
      </Row>

      <PenaltyAmount />
      <div
        style={{
          height: 20,
        }}
      />
      <Row>
        <Coin src={coin} />
        <Subtitle2>지난주 벌금</Subtitle2>
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
  margin-right: 5px;
  margin-top: -4px;
`;
