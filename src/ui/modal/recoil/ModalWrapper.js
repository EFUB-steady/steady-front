import UploadStudyModal from "../modals/UploadStudyModal";

import ReportMoreModal from "../modals/ReportMoreModal";

import YesterdayStudyModal from "../modals/YesterdayStudyModal";
import UploadStudySupplyModal from "../modals/UploadStudySupplyModal";
import StudyListModal from "../modals/StudyListModal";

export default function ModalWrapper() {
  return (
    <>
      <UploadStudyModal />
      <ReportMoreModal />
      <YesterdayStudyModal />
      <UploadStudySupplyModal />
      <StudyListModal />
    </>
  );
}
