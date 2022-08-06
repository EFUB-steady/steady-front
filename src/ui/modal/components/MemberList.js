import React from "react";
import { useStudyListByDate } from "./../../../feature/studies/studyListByDate/recoil/useStudyListByDate";
import MemberListItem from "./MemberListItem";

export default function MemberList() {
  const { studyListByDate } = useStudyListByDate();

  const renderStudyList = () => {
    const result = [];
    for (let i = 0; i < studyListByDate.length; i++) {
      result.push(<MemberListItem study={studyListByDate[i]} />);
    }
    return result;
  };
  return <div>{renderStudyList()}</div>;
}
