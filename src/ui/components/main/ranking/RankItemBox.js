import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import UpperRank from "./UpperRank";
import LowerRank from "./LowerRank";
export default function RankItemBox() {
  return (
    <Wrapper>
      <UpperRank />
      <LowerRank />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 988px;
  background-color: ${gray100};
`;
