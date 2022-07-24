import styled from "styled-components";
import { OtherStudyModalPic } from "./OtherStudyMdalPic";
import { OtherStudyModalUrl } from "./OtherStudyUrl";

export default function OtherStudyModal({memberList}) {
  return(
    <>
    <OtherStudyModalPic member={memberList[0]}/>
    <Divider/>
    <OtherStudyModalUrl member={memberList[1]}/>
    <Divider/>
    <OtherStudyModalPic member={memberList[2]}/>
    <Divider/>
    <OtherStudyModalUrl member={memberList[3]}/>
    <Divider/>
    <OtherStudyModalUrl member={memberList[4]}/>
    <Divider/>
    <OtherStudyModalUrl member={memberList[5]}/>
    </>
  )
}

const Divider = styled.div`
height: 16px;
background-color: white;
`