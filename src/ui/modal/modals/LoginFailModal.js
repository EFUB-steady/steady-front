import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function LoginFailModal({ isOpen, setIsOpen }) {
  // const [open, setOpen] = React.useState(false);

  const closeHandler = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={() => closeHandler()}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "red" }}
          >
            아이디나 비밀번호가 틀렸습니다
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
