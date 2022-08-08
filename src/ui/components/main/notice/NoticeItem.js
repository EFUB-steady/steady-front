import styled from "styled-components";
import { Body2 } from "../../../../core/texts";
import { useNoticeOne } from "../../../../feature/notices/noticeOne/recoil/useNoticeOne";

export default function NoticeItem() {
  const { noticeOne } = useNoticeOne();
  return (
    <Wrapper>
      <Body2>ㆍ {noticeOne[0]?.content}</Body2>
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
