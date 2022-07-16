import React from 'react'

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  Button,
} from '@mui/material'

import useModals from './recoil/hooks/useModals'

export default function UploadStudyModal({ date, handleClose, handleSave }) {
  const { closeModal } = useModals()
  const onClose = () => {
    closeModal()
  }

  const onSave = async () => {
    if (handleSave) {
      await handleSave()
    }
    closeModal()
  }
  return (
    <Dialog
      open
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      fullWidth
      sx={{ whiteSpace: 'break-spaces' }}
    >
      <DialogContent>
        <DialogContentText>
          <div>{date} 스터디 인증하기</div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onSave} color="primary" autoFocus>
          저장하기
        </Button>
      </DialogActions>
    </Dialog>
  )
}
