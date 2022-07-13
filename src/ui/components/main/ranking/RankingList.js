import styled from "styled-components";
import { blue500, gray100, orange500, pink500 } from "../../../../core/colors";
import UpperRank from "./UpperRank";
import LowerRank from "./LowerRank";

const RANK_DATA = [
  {
    rank: 1,
    name: "시바",
    color: pink500,
    score: 1111111,
  },
  {
    rank: 2,
    name: "호랑이",
    color: orange500,
    score: 2222,
  },
  {
    rank: 3,
    name: "구렁이",
    color: blue500,
    score: 333,
  },
  {
    rank: 4,
    name: "캥거루",
    score: 332,
  },
  {
    rank: 5,
    name: "박쥐",
    score: 331,
  },
  {
    rank: 6,
    name: "고양이",
    score: 330,
  },
  {
    rank: 7,
    name: "사마귀",
    score: 320,
  },
  {
    rank: 8,
    name: "코알라",
    score: 200,
  },
  {
    rank: 9,
    name: "아르마딜로",
    score: 10,
  },
];

export default function RankingList() {
  return (
    <Wrapper>
      <UpperRank rankList={RANK_DATA} />
      <LowerRank rankList={RANK_DATA} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 988px;
  height: auto;
  background-color: ${gray100};
  border: 3px solid black;
  border-radius: 5px;
`;
