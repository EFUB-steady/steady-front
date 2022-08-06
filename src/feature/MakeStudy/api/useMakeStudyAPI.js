import { axiosInstance } from "../../../core/axiosInstance";
import { useState } from "react";
import { useMakeStudy } from "../recoil/useMakeStudy";

export const useMakeStudyAPI = () => {
  const {
    name: inputName,
    summary: inputSummary,
    description: inputDescription,
    mon: inputMon,
    tue: inputTue,
    wed: inputWed,
    thu: inputThu,
    fri: inputFri,
    sat: inputSat,
    sun: inputSun,
    accountBank: inputAccountBank,
    account: inputAccount,
    accountName: inputAccountName,
    hour: inputHour,
    minute: inputMinute,
  } = useMakeStudy();

  const [isLoading, setIsLoading] = useState(false);

  const makeStudyAPI = async ({ onSuccess, onFail }) => {
    setIsLoading(true);

    try {
      const data = await axiosInstance.post("studies", {
        name: inputName,
        summary: inputSummary,
        description: inputDescription,
        mon: inputMon,
        tue: inputTue,
        wed: inputWed,
        thu: inputThu,
        fri: inputFri,
        sat: inputSat,
        sun: inputSun,
        accountBank: inputAccountBank,
        account: inputAccount,
        accountName: inputAccountName,
        hour: inputHour,
        minute: inputMinute,
      });

      if (data) {
        onSuccess && onSuccess();
      }
    } catch (error) {
      onFail && onFail();
    } finally {
      setIsLoading(false);
    }
  };

  return { makeStudyAPI, isLoading };
};
