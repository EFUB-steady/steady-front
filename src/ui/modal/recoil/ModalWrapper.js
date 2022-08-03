import UploadStudyModal from "../modals/UploadStudyModal";

import ReportMoreModal from "../modals/ReportMoreModal";

//import YesterdayStudyModal from "../modals/YesterdayStudyModal";
import UploadStudySupplyModal from "../modals/UploadStudySupplyModal";
import StudyListModal from "../modals/StudyListModal";
import ReportCancelModal from "../modals/ReportCancelModal";

export default function ModalWrapper() {
  return (
    <>
      <UploadStudyModal />
      <ReportMoreModal />
      {/* <YesterdayStudyModal /> */}
      <UploadStudySupplyModal />
      <ReportCancelModal />
      <StudyListModal />
    </>
  );
}
