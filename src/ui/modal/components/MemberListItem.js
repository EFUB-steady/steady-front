//MemberListItem 기능

import styled from "styled-components";
import { OtherStudyModalPic } from "./OtherStudyMdalPic";
import { OtherStudyModalUrl } from "./OtherStudyUrl";

export default function MemberListItem({}) {
  return (
    <>
      <OtherStudyModalPic />
      <Divider />
      <OtherStudyModalUrl />
      <Divider />
    </>
  );
}

const Divider = styled.div`
  height: 16px;
  background-color: white;
`;
