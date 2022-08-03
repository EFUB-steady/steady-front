import React from "react";
import styled from "styled-components";
import { gray100, gray300 } from "../../../core/colors";
import { Body3, Subtitle2 } from "../../../core/texts";
import linkIcon from "../../../assets/icon_link.png";
import picIcon from "../../../assets/icon_picture.png";
import GoToStudyBtn from "./../buttons/study/GoToStudyBtn";

export default function ListBarStudy({ study }) {
  return (
    <Wrapper>
      <ImageContainer>
        <PicImage src={picIcon} />
        <LinkImage src={linkIcon} />
      </ImageContainer>
      <StudyContainer>
        <div style={{ marginBottom: "8px" }}>
          <Subtitle2>{study.name}</Subtitle2>
        </div>
        <Body3>{study.fine}</Body3>
      </StudyContainer>
      <GoToStudyBtn />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 3px solid #000000;
  border-radius: 5px;
  margin-top: 16px;
  margin-bottom: 4px;
  margin-left: 16px;

  width: 240px;
  height: 170px;

  &:hover {
    background: ${gray300};
  }
`;
const ImageContainer = styled.div`
  /* background-color: yellow; */
  margin-top: 17px;
  margin-left: 15px;
`;

const StudyContainer = styled.div`
  /* background-color: red; */
  margin-top: 13px;
  margin-left: 15px;
  margin-bottom: 26px;

  display: flex;
  flex-direction: column;
  align-items: space-around;
  /*justify-content: center;
  height: 100%; */
`;

const LinkImage = styled.img`
  margin-left: 6px;
  width: 18px;
  height: 18px;
`;

const PicImage = styled.img`
  width: 18px;
  height: 18px;
`;
