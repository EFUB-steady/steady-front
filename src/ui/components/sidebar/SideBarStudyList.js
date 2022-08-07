import React from "react";
import styled from "styled-components";
import { useMyStudy } from "../../../feature/studies/myStudy/recoil/useMyStudy";
import SideBarStudyItem from "./SideBarStudyItem";

export default function SideBarStudyList() {
  const { myStudy } = useMyStudy();

  const renderStudyList = () => {
    const result = [];
    for (let i = 0; i < myStudy.length; i++) {
      result.push(<SideBarStudyItem study={myStudy[i]} />);
    }
    return result;
  };

  return <Wrapper>{renderStudyList()}</Wrapper>;
}

const Wrapper = styled.div`
  height: 50%;
  overflow-y: scroll;
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
