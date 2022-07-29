import { Dialog, DialogContent } from "@mui/material";
import styled from "styled-components";
import { useLoginFailModal } from "../recoil/hooks/useModals";
import React from "react";
import { Subtitle3 } from "../../../core/texts";

export default function LoginFailModal() {
  const { isOpen, closeModal } = useLoginFailModal();

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
            아이디나 비밀번호가 틀렸습니다.
          </Subtitle3>
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 10px;
`;
