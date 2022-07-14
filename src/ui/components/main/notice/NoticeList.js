import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import NoticeView from "./NoticeView";

const NOTICE_DATA = [
  {
    id: 1,
    notice: "스터디는 3개월 간 진행합니다. (2022년 5월 - 7월)",
  },
  {
    id: 2,
    notice: "모인 벌금은 그 달 스터디 인증을 가장 많이 한 1등이 독식합니다.",
  },
  {
    id: 3,
    notice:
      "무단 결석은 3번까지 가능합니다. 3번 초과하면 이 스터디에서 탈퇴됩니다.",
  },
];

export default function NoticeList() {
  return (
    <Wrapper>
      <NoticeView noticeList={NOTICE_DATA} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: auto;
  background-color: ${gray100};
  border: 3px solid black;
  border-radius: 5px;
  flex-direction: column;
`;
