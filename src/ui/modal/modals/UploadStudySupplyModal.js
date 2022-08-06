import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import StudyModalTitle from "../components/StudyModalTitle";
import { useStudyPostInput } from "../../../feature/studies/studyPost/recoil/useStudyPost";
import { StudyModalPic } from "../components/StudyModalPic";
import { StudyModalUrl } from "../components/StudyModalUrl";
export default function UploadStudySupplyModal({ isOpen, setIsOpen }) {
  const { setLink, setImageUrl } = useStudyPostInput();

  const closeHandler = () => {
    setIsOpen(false);
    setLink("");
    setImageUrl("");
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => closeHandler()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="false"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        <DialogContent>
          <StudyModalTitle
            date={new Date().setDate(new Date().getDate() - 1)}
            titleText={"스터디 인증하기"}
            buttonText={"저장하기"}
          />
          {/* <MemberList /> */}
          <StudyModalPic />
          <StudyModalUrl />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
