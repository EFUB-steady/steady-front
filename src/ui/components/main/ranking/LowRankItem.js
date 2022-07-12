import styled from "styled-components";
import { Subtitle5 } from "../../../../core/texts";

export default function LowerRankItem() {
  return (
    <Wrapper>
      <Middle>
        <MiddleRank>
          <Subtitle5>ㆍ 4위</Subtitle5>
        </MiddleRank>
        <MiddleUser>
          <Subtitle5>xxxxxx</Subtitle5>
        </MiddleUser>
      </Middle>
      <Middle>
        <MiddleRank>
          <Subtitle5>ㆍ 4위</Subtitle5>
        </MiddleRank>
        <MiddleUser>
          <Subtitle5>xxxxxx</Subtitle5>
        </MiddleUser>
      </Middle>
      <Middle>
        <MiddleRank>
          <Subtitle5>ㆍ 4위</Subtitle5>
        </MiddleRank>
        <MiddleUser>
          <Subtitle5>xxxxxx</Subtitle5>
        </MiddleUser>
      </Middle>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
  width: 30%;
  flex-direction: column;
`;

const Middle = styled.div`
  display: flex;
  justify-content: space-around;
  border: 3px solid black;
  padding: 22px 0;
`;

const MiddleRank = styled.div``;
const MiddleUser = styled.div``;
