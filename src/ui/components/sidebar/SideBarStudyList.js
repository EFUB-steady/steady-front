import React from "react";
import styled from "styled-components";
import { useMyStudy } from "../../../feature/studies/myStudy/recoil/useMyStudy";
import SideBarStudyItem from "./SideBarStudyItem";

export default function SideBarStudyList() {
  const { myStudy } = useMyStudy();

  return (
    <Wrapper>
      {myStudy.map((study) => (
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
