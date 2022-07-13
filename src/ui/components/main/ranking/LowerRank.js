import styled from "styled-components";
import LowerRankItem from "./LowRankItem";

export default function LowerRank({ rankList }) {
  return (
    <Wrapper>
      <List>
        <LowerRankItem rank={rankList[3]} />
        <DividerHr />
        <LowerRankItem rank={rankList[4]} />
        <DividerHr />
        <LowerRankItem rank={rankList[5]} />
      </List>
      <DividerVr />
      <List>
        <LowerRankItem rank={rankList[6]} />
        <DividerHr />
        <LowerRankItem rank={rankList[7]} />
        <DividerHr />
        <LowerRankItem rank={rankList[8]} />
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
`;

const List = styled.div`
  width: 50%;
`;

const DividerHr = styled.div`
  height: 3px;
  background-color: black;
`;

const DividerVr = styled.div`
  width: 3px;
  background-color: black;
`;
