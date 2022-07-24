import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import StudyModalTitle from "../recoil/components/StudyModalTitle";
import { useUploadStudyModal } from "../recoil/hooks/useModals";
import MemberList from "../recoil/components/MemberList";

export default function UploadStudyModal() {
  const { isOpen, closeModal } = useUploadStudyModal();

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
            titleText={"스터디 인증하기"}
            buttonText={"저장하기"}
          />
          <MemberList />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
