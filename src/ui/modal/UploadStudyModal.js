import React from "react";
import styled from "styled-components";

import { Dialog, DialogContent } from "@mui/material";
import useModals from "./recoil/hooks/useModals";
import StudyModalTitle from "./recoil/components/StudyModalTitle";
import { StudyModalPic } from "./recoil/components/StudyModalPic";
import { StudyModalUrl } from "./recoil/components/StudyModalUrl";
import { OtherStudyModalPic } from "./recoil/components/OtherStudyMdalPicOther";
import { OtherStudyModalUrl } from "./recoil/components/OtherStudyModalUrl";

export default function UploadStudyModal({ date, handleSave }) {
  const { closeModal } = useModals();
  const onClose = () => {
    closeModal();
  };

  const onSave = async () => {
    if (handleSave) {
      await handleSave();
    }
    closeModal();
  };
  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="false"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        {" "}
        <DialogContent>
          <StudyModalTitle
            date={date}
            titleText={"스터디 인증 목록"}
            buttonText={"저장하기"}
            onClick={onSave}
          />
          <OtherStudyModalPic />
          <OtherStudyModalUrl />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
