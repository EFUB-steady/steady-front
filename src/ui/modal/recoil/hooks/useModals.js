import { generateModalHook } from "../generateModalHook";
import {
  uploadStudyModalState,
  todayStudyModalState,
  reportMoreModalState,
  reportCancelModalState,
} from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);

export const useTodayStudyModal = generateModalHook(todayStudyModalState);

export const useReportMoreModal = generateModalHook(reportMoreModalState);

export const useReportCancelModal = generateModalHook(reportCancelModalState);
