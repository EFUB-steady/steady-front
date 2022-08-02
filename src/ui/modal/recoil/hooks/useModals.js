import { generateModalHook } from "../generateModalHook";
import {
  uploadStudyModalState,
  todayStudyModalState,
  yesterdayStudyModalState,
  reportMoreModalState,
  reportCancelModalState,
} from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);

export const useTodayStudyModal = generateModalHook(todayStudyModalState);

export const useYesterdayStudyModal = generateModalHook(
  yesterdayStudyModalState,
);

export const useReportMoreModal = generateModalHook(reportMoreModalState);

export const useReportCancelModal = generateModalHook(reportCancelModalState);
