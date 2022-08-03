import { generateModalHook } from "../generateModalHook";
import {
  uploadStudyModalState,
  uploadStudyModalSupplyState,
  reportMoreModalState,
  reportCancelModalState,
  studyListModalState,
} from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);

export const useUploadStudySupplyModal = generateModalHook(
  uploadStudyModalSupplyState,
);

export const useStudyListModal = generateModalHook(studyListModalState);

export const useReportMoreModal = generateModalHook(reportMoreModalState);

export const useReportCancelModal = generateModalHook(reportCancelModalState);
