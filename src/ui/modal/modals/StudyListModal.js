import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { useStudyListModal } from "../recoil/hooks/useModals";
import StudyModalTitle from "../recoil/components/StudyModalTitle";
import { useStudyListDate } from "../../../feature/studyList/recoil/useStudyListDate";

export default function StudyListModal() {
  const { isOpen, closeModal } = useStudyListModal();
  const { selectedDate } = useStudyListDate();
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
            date={selectedDate}
            titleText={"스터디 인증목록"}
            buttonText={"인증하기"}
          />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
