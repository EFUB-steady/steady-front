import React from "react";
import { Dialog, DialogContent, DialogContentText } from "@mui/material";

export default function StudyPostFailModal({ isOpen, setIsOpen }) {
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
          입력되지 않은 정보가 있습니다.
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
