import styled from "styled-components";
import { useRanking } from "../../../../feature/ranking/recoil/useRanking";
import UpperRankItem from "./UpperRankItem";

export default function UpperRank() {
  const { ranking } = useRanking();

  const renderUpperRank = () => {
    const result = [];
    for (let i = 0; i < 3; i++) {
      if (ranking[i])
        result.push(<UpperRankItem ranking={ranking[i]} rank={i + 1} />);
      if (i < 2) result.push(<Divider />);
    }
    return result;
  };
  return <Wrapper>{renderUpperRank()}</Wrapper>;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  border-right: 3px solid black;
`;

const Divider = styled.div`
  height: 3px;
  background-color: black;
`;
