import UploadStudyModal from "../modals/UploadStudyModal";

import ReportMoreModal from "../modals/ReportMoreModal";

import YesterdayStudyModal from "../modals/YesterdayStudyModal";

export default function ModalWrapper() {
  return (
    <>
      <UploadStudyModal />
      <ReportMoreModal />
      <YesterdayStudyModal />
    </>
  );
}
