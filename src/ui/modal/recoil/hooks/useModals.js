import { generateModalHook } from "../generateModalHook";
import { uploadStudyModalState } from "../states/modalStates";

export const useUploadStudyModal = generateModalHook(uploadStudyModalState);
