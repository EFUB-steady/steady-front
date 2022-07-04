import LowerRankItem from "./LowerRankItem";
import UpperRankItem from "./UpperRankItem";

export default function Ranking() {
  return (
    <div style={{ display: "flex", flexDirection: "column", margin: 30 }}>
      <div>0월 0주차 랭킹</div>
      <UpperRankItem />
      <LowerRankItem />
    </div>
  );
}
