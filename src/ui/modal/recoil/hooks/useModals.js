import { useRecoilState } from 'recoil'
import { uploadStudyModalState } from '../states/modalStates'

export default function useModals() {
  const [modal, setModal] = useRecoilState(uploadStudyModalState)

  const openModal = ({ modalType, modalProps }) => {
    setModal({ modalType, modalProps })
  }

  const closeModal = () => {
    setModal(null)
  }

  return {
    modal,
    setModal,
    openModal,
    closeModal,
  }
}
