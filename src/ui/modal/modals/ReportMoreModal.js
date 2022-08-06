import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { useReportMoreModal } from "../recoil/hooks/useModals";
import ReportMoreModalTitle from "../recoil/components/ReportMoreModalTitle";
import { ReportStudyModalPic } from "../recoil/components/ReportStudyModalPic";
import { StudyModalUrl } from "../recoil/components/StudyModalUrl";
import { ReportMoreModalURL } from "../recoil/components/ReportMoreModalUrl";

export default function ReportMoreModal() {
  const { isOpen, closeModal } = useReportMoreModal();

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
