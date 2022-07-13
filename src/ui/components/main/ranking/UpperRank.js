import styled from "styled-components";
import UpperRankItem from "./UpperRankItem";

export default function UpperRank({ rankList }) {
  return (
    <Wrapper>
      <UpperRankItem rank={rankList[0]} />
      <Divider />
      <UpperRankItem rank={rankList[1]} />
      <Divider />
      <UpperRankItem rank={rankList[2]} />
    </Wrapper>
  );
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
