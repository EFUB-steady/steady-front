import UploadStudyModal from "../modals/UploadStudyModal";
import LoginFailModal from "../modals/LoginFailModal";

export default function ModalWrapper() {
  return (
    <>
      <UploadStudyModal />
      <LoginFailModal />
    </>
  );
}
