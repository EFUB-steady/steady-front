import styled from "styled-components";

import StudyInfoTitle from "./StudyInfoTitle";

export default function StudyInfo() {
  return (
    <>
      <StudyInfoTitle />
      <Content>
        Folio은 이화여자대학교 기반의 디자인 포트폴리오 작업 스터디입니다.
        포트폴리오 작업을 인증하고 서로 성장하고 자극받을 수 있는 스터디가
        되었으면 합니다:)
      </Content>
    </>
  );
}

const Content = styled.div`
  /* 스터디 설명 영역 */
  box-sizing: border-box;

  width: 100%;
  height: 149px;
  left: 282px;
  top: 269px;
  background: #f5f5f5;
  border: 3px solid #000000;
  border-radius: 5px;
  line-height: 36px;

  /*텍스트 패딩*/
  padding-top: 15.29px;
  padding-left: 35px;
  padding-right: 26px;
  padding-bottom: 61.63px;

  margin-top: 24px;
`;
