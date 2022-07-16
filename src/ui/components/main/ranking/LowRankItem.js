import styled from "styled-components";
import { Subtitle5 } from "../../../../core/texts";

export default function LowerRankItem({ rank }) {
  return (
    <Wrapper>
      <Rank>
        <Subtitle5> ㆍ {rank.rank}위</Subtitle5>
      </Rank>
      <User>
        <Subtitle5>{rank.name}</Subtitle5>
      </User>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  height: 65px;
  justify-content: center;
  align-items: center;
`;

const Rank = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const User = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
`;
