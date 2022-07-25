import { generateModalHook } from "../generateModalHook";
import { uploadStudyModalState, dateStudyModalState } from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);

export const useDateStudyModal = generateModalHook(dateStudyModalState); 