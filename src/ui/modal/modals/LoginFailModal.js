import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

export default function LoginFailModal({ isOpen, setIsOpen }) {
  // const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        로그인실패버튼
      </Button> */}
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ color: "red" }}
          >
            아이디나 비밀번호가 틀렸습니다아아앙
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
