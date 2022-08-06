import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import ReportMoreModalTitle from "../recoil/components/ReportMoreModalTitle";
import { ReportStudyModalPic } from "../recoil/components/ReportStudyModalPic";
import { ReportMoreModalURL } from "../recoil/components/ReportMoreModalUrl";
import { useStudyPostInput } from "../../../feature/studies/studyPost/recoil/useStudyPost";

export default function ReportMoreModal({ isOpen, setIsOpen }) {
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
          <ReportMoreModalTitle />
          <ReportStudyModalPic />
          <ReportMoreModalURL />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
