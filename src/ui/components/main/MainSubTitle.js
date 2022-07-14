import styled from "styled-components";
import { Subtitle1 } from "../../../core/texts";

export default function MainSubTitle({ iconSrc, title }) {
  return (
    <RankTitle>
      <RankIcon src={iconSrc} />
      <Subtitle1>{title}</Subtitle1>
    </RankTitle>
  );
}

const RankIcon = styled.img`
  height: 21px;
  margin-right: 10px;
`;

const RankTitle = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;
