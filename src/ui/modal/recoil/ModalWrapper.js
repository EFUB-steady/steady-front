import UploadStudyModal from "../modals/UploadStudyModal";

import ReportMoreModal from "../modals/ReportMoreModal";

import UploadStudySupplyModal from "../modals/UploadStudySupplyModal";
import StudyListModal from "../modals/StudyListModal";
import ReportCancelModal from "../modals/ReportCancelModal";
import LoginFailModal from "../modals/LoginFailModal";
import SignInFailModal from "../modals/SignInFailModal";

export default function ModalWrapper() {
  return (
    <>
      <UploadStudyModal />
      <ReportMoreModal />
      <UploadStudySupplyModal />
      <ReportCancelModal />
      <StudyListModal />
      <LoginFailModal />
      <SignInFailModal />
    </>
  );
}
