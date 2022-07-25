import React from "react";
import styled from "styled-components";
import SideBarStudyItem from "./SideBarStudyItem";

const STUDY_DATA = [
  {
    id: 1,
    name: "FOLIO",
    explain: "디자인 포폴 스터디",
  },
  {
    id: 2,
    name: "이영스",
    explain: "이화 영어 회화 스터디",
  },
  {
    id: 3,
    name: "이영스",
    explain: "이화 영어 회화 스터디",
  },
  {
    id: 4,
    name: "이영스",
    explain: "이화 영어 회화 스터디",
  },
];

export default function SideBarStudyList() {
  return (
    <Wrapper>
      {STUDY_DATA.map((study) => (
        <SideBarStudyItem key={study.id} study={study} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 250px;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
