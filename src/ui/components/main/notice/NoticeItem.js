import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import { Body2 } from "../../../../core/texts";

export default function NoticeItem() {
  return (
    <Wrapper>
      <Box>
        <NoticeGroup>
          <Body2>· 스터디는 3개월 간 진행합니다. (2022년 5월 - 7월)</Body2>
          <Body2>· 모인 벌금은 그 달 스터디 인증을 가장 많이 한 1등이 독식합니다.</Body2>
          <Body2>· 무단 결석은 3번까지 가능합니다. 3번 초과하면 이 스터디에서 탈퇴됩니다.</Body2>
        </NoticeGroup>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 987px;
  height: 170px;
  border: 3px solid black;
  background-color: ${gray100};
  border-radius: 5px;
`;

const NoticeGroup = styled.div`
  margin-left: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`;
