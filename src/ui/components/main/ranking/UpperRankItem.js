import styled from "styled-components";
import { Subtitle1 } from "../../../../core/texts";

export default function UpperRankItem({ ranking, rank }) {
  return (
    <Wrapper>
      <Rank>
        <Subtitle1>● {rank}위</Subtitle1>
      </Rank>
      <User>
        <UserColor color={`#${ranking.color}`} />
        <Subtitle1>{ranking.nickname}</Subtitle1>
      </User>
      <Score>{ranking.score}점</Score>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: 65px;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;
`;

const Rank = styled.div`
  width: 20%;
`;

const User = styled.div`
  display: flex;
  width: 40%;
`;

const UserColor = styled.div`
  background-color: ${(props) => props.color};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 10px;
`;

const Score = styled.div`
  display: flex;
  justify-content: end;
  width: 30%;
`;
