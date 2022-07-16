import React from "react";
import styled from "styled-components";
import { gray300 } from "../../../core/colors";
import { Subtitle4, Title5 } from "../../../core/texts";
import homewhite from "../../../assets/btn_home_default.png";

export default function SideBarStudy({ study }) {
  return (
    <Wrapper>
      <ImageContainer>
        <Homeimage src={homewhite} />
      </ImageContainer>
      <StudyContainer>
        <div style={{ marginBottom: "4px" }}>
          <Title5>{study.name}</Title5>
        </div>
        <Subtitle4>{study.explain}</Subtitle4>
      </StudyContainer>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  background-color: ${gray300};
  border: 3px solid #000000;
  border-radius: 5px;
  margin-top: 4px;
  margin-bottom: 4px;
  width: 157px;
  height: 72px;
`;

const StudyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
`;

const Homeimage = styled.img`
  width: 20px;
  height: 19px;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;
