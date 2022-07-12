import styled from "styled-components";
import RankingList from "./RankingList";
import { Subtitle1 } from "../../../../core/texts";

export default function Ranking() {
  return (
    <Wrapper>
      <RankTitle>
        <div>아이콘</div>
        <Subtitle1>0월 0주차 랭킹</Subtitle1>
      </RankTitle>

      <RankingList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: red;
`;

const RankTitle = styled.div`
  display: flex;
  flex-direction: row;
`;
