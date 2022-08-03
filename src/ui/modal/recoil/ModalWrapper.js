import UploadStudyModal from "../modals/UploadStudyModal";
import UploadStudySupplyModal from "../modals/UploadStudySupplyModal";
import StudyListModal from "../modals/StudyListModal";
import LoginFailModal from "../modals/LoginFailModal";

export default function ModalWrapper() {
  return (
    <>
      <UploadStudyModal />
      <UploadStudySupplyModal />
      <StudyListModal />
      <LoginFailModal />
    </>
  );
}
