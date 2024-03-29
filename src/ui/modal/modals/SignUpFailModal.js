import styled from "styled-components";
import React from "react";
import { Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function SignUpFailModal({ isOpen, setIsOpen }) {
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="false"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <DialogContent>
        <DialogContentText
          id="alert-dialog-description"
          style={{ color: "red" }}
        >
          이미 가입된 계정이거나 입력되지 않은 부분이 있습니다.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
