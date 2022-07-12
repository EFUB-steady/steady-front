import styled from "styled-components";
import { pink500 } from "../../../../core/colors";
import { Subtitle1 } from "../../../../core/texts";
export default function UpperRankItem() {
  return (
    <Wrapper>
      <Rank>● 1위</Rank>
      <User>
        <UserColor />
        <Subtitle1> xxxxxx</Subtitle1>
      </User>
      <Score>0000000점</Score>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  padding: 20px 0;
  border: 3px solid black;
  justify-content: space-around;
`;

const Rank = styled.div``;

const UserColor = styled.div`
  background-color: ${pink500};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid black;
`;
const User = styled.div`
  display: flex;
`;
const Score = styled.div``;
