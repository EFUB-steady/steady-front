import styled from "styled-components";
import { Body2 } from "../../../../core/texts";

export default function NoticeItem({ notice }) {
  return (
    <Wrapper>
        <Body2> ㆍ {notice.notice}</Body2>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  display: flex;
`;

