import { generateModalHook } from "../generateModalHook";
import {
  uploadStudyModalState,
  dateStudyModalState,
  loginFailModalState,
} from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);

export const useDateStudyModal = generateModalHook(dateStudyModalState);

export const useLoginFailModal = generateModalHook(loginFailModalState);
