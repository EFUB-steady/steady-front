import React from "react";
import ListBarStudyItem from "./ListBarStudyItem.js";
import { useMyStudy } from "../../../feature/studies/myStudy/recoil/useMyStudy";

export default function ListBarStudyList() {
  const { myStudy } = useMyStudy();
  const renderStudyList = () => {
    const result = [];
    for (let i = 0; i < myStudy.length; i++) {
      result.push(<ListBarStudyItem study={myStudy[i]} />);
    }
    return result;
  };

  return <>{renderStudyList()}</>;
}
