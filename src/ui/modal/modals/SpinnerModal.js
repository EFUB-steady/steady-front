import React from "react";
import { CircularProgress, Dialog } from "@mui/material";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function SpinnerModal({ isOpen, setIsOpen }) {
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
        <DialogContentText id="alert-dialog-description">
          <CircularProgress style={{ color: "#FF6363" }} />
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
