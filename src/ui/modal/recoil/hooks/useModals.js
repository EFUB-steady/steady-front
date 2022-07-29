import { generateModalHook } from "../generateModalHook";
import { uploadStudyModalState, dateStudyModalState, reportMoreModalState, reportCancelModalState } from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);

export const useDateStudyModal = generateModalHook(dateStudyModalState); 

export const useReportMoreModal = generateModalHook(reportMoreModalState);

export const useReportCancelModal = generateModalHook(reportCancelModalState);