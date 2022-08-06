import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function LoginFailModal({ isOpen, setIsOpen }) {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "red" }}
          >
            아이디나 비밀번호가 틀렸습니다.
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
