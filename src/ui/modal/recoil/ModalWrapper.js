import { useRecoilState } from 'recoil'
import UploadStudyModal from '../UploadStudyModal'
import { uploadStudyModalState } from './states/modalStates'

export const MODAL_TYPES = {
  UploadStudyModal: 'UploadStudyModal',
}

export default function ModalWrapper() {
  const { modalType, modalProps } =
    useRecoilState(uploadStudyModalState)[0] || {}

  const MODAL_COMPONENTS = {
    [MODAL_TYPES.UploadStudyModal]: UploadStudyModal,
  }

  const renderComponent = () => {
    if (!modalType) {
      return null
    }
    const ModalComponent = MODAL_COMPONENTS[modalType]
    return <ModalComponent {...modalProps} />
  }

  return <>{renderComponent()}</>
}
