import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { useYesterdayStudyModal } from "../recoil/hooks/useModals";

export default function YesterdayStudyModal() {
  const { isOpen, closeModal } = useYesterdayStudyModal();

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
          <div onClick={closeModal()}>hello</div>
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
