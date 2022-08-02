import { generateModalHook } from "../generateModalHook";
import {
  uploadStudyModalState,
  uploadStudyModalSupplyState,
  todayStudyModalState,
  studyListModalState,
  reportMoreModalState,
  reportCancelModalState,
} from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);

export const useUploadStudySupplyModal = generateModalHook(
  uploadStudyModalSupplyState,
);

export const useTodayStudyModal = generateModalHook(todayStudyModalState);

export const useStudyListModal = generateModalHook(studyListModalState);

export const useReportMoreModal = generateModalHook(reportMoreModalState);

export const useReportCancelModal = generateModalHook(reportCancelModalState);
