import styled from "styled-components";
import UpperRankItem from "./UpperRankItem";

export default function UpperRank() {
  return (
    <Wrapper>
      <UpperRankItem />
      <UpperRankItem />
      <UpperRankItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  background-color: yellow;
`;
