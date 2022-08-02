import UploadStudyModal from "../modals/UploadStudyModal";
import TodayStudyModal from "../modals/TodayStudyModal";
import StudyListModal from "../modals/StudyListModal";
import UploadStudySupplyModal from "../modals/UploadStudySupplyModal";

export default function ModalWrapper() {
  return (
    <>
      <UploadStudyModal />
      <UploadStudySupplyModal />
      <TodayStudyModal />
      <StudyListModal />
    </>
  );
}
