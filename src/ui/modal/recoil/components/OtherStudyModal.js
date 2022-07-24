import styled from "styled-components";
import { OtherStudyModalPicUrl } from "./OtherStudyMdalPic";

export default function OtherStudyModal({memberList}) {
  return(
    <>
    <OtherStudyModalPicUrl member={memberList[0]}/>
    <Divider/>
    <OtherStudyModalPicUrl member={memberList[1]}/>
    <Divider/>
    <OtherStudyModalPicUrl member={memberList[2]}/>
    </>
  )
}

const Divider = styled.div`
height: 16px;
background-color: white;
`