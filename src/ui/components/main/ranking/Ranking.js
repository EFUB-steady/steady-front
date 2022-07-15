import RankingList from "./RankingList";
import rankicon from "../../../../assets/icon_rank.png";
import MainSubTitle from "../MainSubTitle";
import styled from "styled-components";

export default function Ranking() {
  return (
    <Wrapper>
      <MainSubTitle iconSrc={rankicon} title={"0월 0주차 랭킹"} />
      <RankingList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
