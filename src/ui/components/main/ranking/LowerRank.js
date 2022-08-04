import { Divider } from "@mui/material";
import styled from "styled-components";
import { useRanking } from "../../../../feature/ranking/recoil/useRanking";
import LowerRankItem from "./LowRankItem";

export default function LowerRank() {
  const { ranking } = useRanking();

  const renderLowerRankLeft = () => {
    const result = [];
    for (let i = 3; i < 6; i++) {
      if (ranking[i])
        result.push(<LowerRankItem ranking={ranking[i]} rank={i + 1} />);
      if (i < 5) result.push(<Divider />);
    }
    return result;
  };

  const renderLowerRankRight = () => {
    const result = [];
    for (let i = 6; i < 9; i++) {
      if (ranking[i])
        result.push(<LowerRankItem ranking={ranking[i]} rank={i + 1} />);
      if (i < 8) result.push(<Divider />);
    }
    return result;
  };

  return (
    <Wrapper>
      <List>{renderLowerRankLeft()}</List>
      <DividerVr />
      <List>{renderLowerRankRight()}</List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  height: 201px;
`;

const List = styled.div`
  width: 50%;
`;

const DividerVr = styled.div`
  width: 3px;
  background-color: black;
`;
