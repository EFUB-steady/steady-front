import React from 'react'

import { Dialog, DialogContent } from '@mui/material'
import useModals from './recoil/hooks/useModals'
import StudyModalTitle from './recoil/components/StudyModalTitle'

export default function UploadStudyModal({ date, handleSave }) {
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
        <StudyModalTitle
          date={date}
          titleText={'스터디 인증하기'}
          buttonText={'저장하기'}
          onClick={onSave}
        />
      </DialogContent>
    </Dialog>
  )
}
