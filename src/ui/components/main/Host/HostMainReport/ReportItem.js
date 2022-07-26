import styled from "styled-components";
import { Subtitle1, Subtitle2 } from "../../../../../core/texts";
import { Body2 } from "../../../../../core/texts";

export default function ReportItem({report}){
  return(
    <Wrapper>
      <Subtitle2>{report.index}</Subtitle2>
      <Body2>{report.date}</Body2>
      <Body2>신고자 {report.reporter}님</Body2>
      <Body2>{report.reported}님 게시물 신고</Body2>
      <Subtitle2>{report.crtidate} 인증</Subtitle2>
      <MoreBtn>자세히 보기</MoreBtn>
    </Wrapper>
  )
}

const Wrapper = styled.div`
display:flex;
height:76px;
width: 1600px;
justify-content: space-around;
align-items: center;
border: 3px solid black;
border-radius: 5px;
`

const MoreBtn = styled.div`
width:108px;
height:48px;
display:flex;
justify-content:center;
align-items:center;
background-color: black;
border-radius: 5px;
color: white;
`