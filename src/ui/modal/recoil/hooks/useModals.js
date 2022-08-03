import { generateModalHook } from "../generateModalHook";
import {
  uploadStudyModalState,
  uploadStudyModalSupplyState,
  reportMoreModalState,
  reportCancelModalState,
  studyListModalState,
  loginFailModalState,
} from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);

export const useUploadStudySupplyModal = generateModalHook(
  uploadStudyModalSupplyState,
);

export const useStudyListModal = generateModalHook(studyListModalState);

export const useReportMoreModal = generateModalHook(reportMoreModalState);

export const useReportCancelModal = generateModalHook(reportCancelModalState);

export const useLoginFailModal = generateModalHook(loginFailModalState);
