import RankingList from "../ranking/RankingList";
import rankicon from "../../../../assets/icon_rank.png";
import MainSubTitle from "../MainSubTitle";
import styled from "styled-components";
import { button2Color } from "../../../../core/colors";
import { Button } from "../../../../core/texts";

export default function HostRanking() {
  return (
    <Wrapper>
      <TitleWrapper>
      <MainSubTitle iconSrc={rankicon} title={"0월 0주차 랭킹"} />
      <LinkCopyBtn><Button>초대 링크 복사하기</Button></LinkCopyBtn>
      </TitleWrapper>
      <RankingList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const TitleWrapper=styled.div`
display:flex;
justify-content:space-between;
`



const LinkCopyBtn = styled.div`
width: 168px;
height: 40px;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
background-color: ${button2Color};
margin-bottom: 10px;
`