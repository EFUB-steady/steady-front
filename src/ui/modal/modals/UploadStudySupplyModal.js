import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import StudyModalTitle from "../recoil/components/StudyModalTitle";
import { useUploadStudySupplyModal } from "../recoil/hooks/useModals";
import { StudyModalPic } from "../recoil/components/StudyModalPic";
import { StudyModalUrl } from "../recoil/components/StudyModalUrl";

export default function UploadStudySupplyModal() {
  const { isOpen, closeModal } = useUploadStudySupplyModal();

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
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
