import React from "react";
import styled from "styled-components";
import { gray300 } from "../../../core/colors";
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
];

export default function SideBarStudyList() {
  return (
    <>
      {STUDY_DATA.map((study) => (
        <SideBarStudyItem key={study.id} study={study} />
      ))}
    </>
  );
}

const Wrapper = styled.button`
  background-color: ${gray300};
  border: 3px solid #000000;
  border-radius: 5px;
  margin-top: 4px;
  margin-bottom: 4px;
`;