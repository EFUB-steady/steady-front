import UploadStudyModal from "../modals/UploadStudyModal";
import UploadStudySupplyModal from "../modals/UploadStudySupplyModal";
import StudyListModal from "../modals/StudyListModal";

export default function ModalWrapper() {
  return (
    <>
      <UploadStudyModal />
      <UploadStudySupplyModal />
      <StudyListModal />
    </>
  );
}
