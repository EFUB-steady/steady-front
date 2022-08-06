import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import StudyModalTitle from "../recoil/components/StudyModalTitle";
import { StudyModalPic } from "../recoil/components/StudyModalPic";
import { StudyModalUrl } from "../recoil/components/StudyModalUrl";
import { useStudyPostInput } from "../../../feature/studies/studyPost/recoil/useStudyPost";

export default function UploadStudyModal({ isOpen, setIsOpen }) {
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
            date={new Date()}
            titleText={"스터디 인증하기"}
            buttonText={"저장하기"}
          />
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
