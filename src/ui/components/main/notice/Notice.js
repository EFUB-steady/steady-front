import styled from "styled-components";
import { Subtitle1 } from "../../../../core/texts";
import noticeicon from "../../../../assets/icon_megaphone.png";
import NoticeList from "./NoticeList";


export default function Notice() {
  return (
    <>
    <Wrapper>
      <NoticeIcon src={noticeicon} />
      <Subtitle1>공지사항</Subtitle1>
      </Wrapper>
      <NoticeBox>
      <NoticeList />
      </NoticeBox>
      </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const NoticeIcon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 10px;
`;

const NoticeBox = styled.div`
margin-top: 16px;
`