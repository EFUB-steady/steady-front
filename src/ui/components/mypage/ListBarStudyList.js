import React from "react";
import ListBarStudyItem from "./ListBarStudyItem.js";

const STUDY_DATA = [
  {
    id: 1,
    name: "FOLIO",
    fine: "벌금: 결석 시 5000원",
  },
  {
    id: 2,
    name: "이영스",
    fine: "벌금: 결석 시 5000원",
  },
  {
    id: 3,
    name: "스터디 이름",
    fine: "벌금: 지각 시 3000원",
  },
  {
    id: 4,
    name: "스터디 이름",
    fine: "벌금: 지각 시 3000원",
  },
  {
    id: 5,
    name: "스터디 이름",
    fine: "벌금: 결석 시 4000원",
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
