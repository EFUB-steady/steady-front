import styled from "styled-components";

export default function MoreStudy() {
  return (
    <div style={{ marginTop: "58.58px" }}>
      <MoreBtn>
        <MoreStudyBtn>스터디 개설하기</MoreStudyBtn>
      </MoreBtn>
    </div>
  );
}

const MoreBtn = styled.div`
  width: 152px;
  height: 48px;
  background-color: black;
  border-radius: 5px;
`;

const MoreStudyBtn = styled.div`
  display: flex;
  height: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  color: white;
  justify-content: center;
  align-items: center;
`;
