import styled from "styled-components";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function SignUpFailModal({ isOpen, setIsOpen }) {
  const closeHandler = () => {
    setIsOpen(false);
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

const ContentWrapper = styled.div`
  margin: 10px;
`;
