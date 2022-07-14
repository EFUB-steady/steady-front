import RankingList from "./RankingList";
import rankicon from "../../../../assets/icon_rank.png";
import MainSubTitle from "../MainSubTitle";

export default function Ranking() {
  return (
    <>
      <MainSubTitle iconSrc={rankicon} title={"0월 0주차 랭킹"} />
      <RankingList />
    </>
  );
}
