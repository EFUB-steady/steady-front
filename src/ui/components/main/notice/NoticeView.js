import styled from "styled-components";
import NoticeItem from "./NoticeItem";

export default function NoticeView({ noticeList }) {
  return (
    <Wrapper>
      <NoticeItem notice={noticeList[0]} />
      <NoticeItem notice={noticeList[1]} />
      <NoticeItem notice={noticeList[2]} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  justify-content: center;
  margin-bottom: 30px;
  margin-top: 30px;
`;
