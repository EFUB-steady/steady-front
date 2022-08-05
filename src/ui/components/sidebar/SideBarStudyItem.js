import React from "react";
import styled from "styled-components";
import { gray100, gray300 } from "../../../core/colors";
import { Subtitle4, Title5 } from "../../../core/texts";
import homewhite from "../../../assets/btn_home_default.png";
import { useNavigate } from "react-router-dom";
import { useSelectedStudyId } from "../../../feature/studies/studySelect/recoil/useSelectedStudy";

export default function SideBarStudy({ study }) {
  const navigation = useNavigate();
  const { selectedStudyId, setSelectedStudyId } = useSelectedStudyId();

  const saveSelectedStudyId = () => {
    if (study.studyId != selectedStudyId) {
      setSelectedStudyId(study.studyId);
    }
    navigation(`/studies/${selectedStudyId}`);
  };

  return (
    <Wrapper onClick={() => saveSelectedStudyId()}>
      <ImageContainer>
        <Homeimage src={homewhite} />
      </ImageContainer>
      <StudyContainer>
        <Title5>{study.name}</Title5>
        {study.description != null && (
          <>
            <div style={{ height: "4px" }} />
            <Subtitle4>{study.description}</Subtitle4>
          </>
        )}
      </StudyContainer>
    </Wrapper>
  );
}

const Wrapper = styled.button`
  display: flex;
  background-color: ${gray100};
  border: 3px solid #000000;
  border-radius: 5px;
  margin-top: 4px;
  margin-bottom: 4px;
  width: 157px;
  height: 72px;

  &:hover {
    background: ${gray300};
  }
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
