import { useEffect } from "react";
import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import { useNoticeOneAPI } from "../../../../feature/notices/noticeOne/api/useNoticeOneAPI";
import { useSelectedStudyId } from "../../../../feature/studies/studySelect/recoil/useSelectedStudy";
import NoticeItem from "./NoticeItem";

export default function NoticeList() {
  const { noticeOneAPI, isLoading } = useNoticeOneAPI();
  const { selectedStudyId } = useSelectedStudyId();


  useEffect(() => {
    noticeOneAPI();
  }, [selectedStudyId]);

  return (
    <Wrapper>
      {/* <NoticeView noticeList={NOTICE_DATA} /> */}
      <NoticeItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  height: auto;
  width: 100%;
  min-width: 987px;
  background-color: ${gray100};
  border: 3px solid black;
  border-radius: 5px;
  flex-direction: column;
`;
