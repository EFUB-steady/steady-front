import React from "react";
import ListBarStudyItem from "./ListBarStudyItem.js";

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
  {
    id: 5,
    name: "이영스",
    explain: "이화 영어 회화 스터디",
  },
];

export default function ListBarStudyList() {
  return (
    <>
      {STUDY_DATA.map((study) => (
        <ListBarStudyItem key={study.id} study={study} />
      ))}
    </>
  );
}
