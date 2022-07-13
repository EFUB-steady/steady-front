import styled from "styled-components";
import RankingList from "./RankingList";
import { Subtitle1 } from "../../../../core/texts";
import rankicon from "../../../../assets/icon_rank.png";
export default function Ranking() {
  return (
    <Wrapper>
      <RankTitle>
        <RankIcon src={rankicon} />
        <Subtitle1>0월 0주차 랭킹</Subtitle1>
      </RankTitle>

      <RankingList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RankIcon = styled.img`
  height: 21px;
  margin-right: 10px;
`;

const RankTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
