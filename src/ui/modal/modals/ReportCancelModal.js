import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { useReportCancelModal } from "../recoil/hooks/useModals";
import ReportCancel from "../recoil/components/ReportCancel";

export default function ReportCancelModal() {
  const { isOpen, closeModal } = useReportCancelModal();

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        <DialogContent>
          <ReportCancel />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div``;
