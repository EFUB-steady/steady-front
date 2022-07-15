import noticeicon from "../../../../assets/icon_megaphone.png";
import NoticeList from "./NoticeList";
import MainSubTitle from "../MainSubTitle";
import styled from "styled-components";

export default function Notice() {
  return (
    <Wrapper>
      <MainSubTitle iconSrc={noticeicon} title={"공지사항"} />
      <NoticeList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 100px;
`;
