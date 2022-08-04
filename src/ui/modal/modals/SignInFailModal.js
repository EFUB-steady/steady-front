import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";
import { useSignInFailModal } from "../recoil/hooks/useModals";
import React from "react";
import { Subtitle3 } from "../../../core/texts";

export default function SignInFailModal() {
  const { isOpen, closeModal } = useSignInFailModal();

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
          <Subtitle3 style={{ color: "red" }}>
            이미 가입된 계정입니다. 
          </Subtitle3>
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 10px;
`;
