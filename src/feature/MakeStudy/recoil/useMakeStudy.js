import { useRecoilState } from "recoil";
import { makeStudyState } from "./MakeStudyState";

export const useMakeStudy = () => {
  const [makeStudy, setMakeStudy] = useRecoilState(makeStudyState);

  const setName = (name) => {
    setMakeStudy((input) => ({
      ...input,
      name: name,
    }));
  };

  const setSummary = (summary) => {
    setMakeStudy((input) => ({
      ...input,
      summary: summary,
    }));
  };

  const setDescription = (description) => {
    setMakeStudy((input) => ({
      ...input,
      description: description,
    }));
  };

  const setMon = (mon) => {
    setMakeStudy((input) => ({
      ...input,
      mon: mon,
    }));
  };
  const setTue = (tue) => {
    setMakeStudy((input) => ({
      ...input,
      tue: tue,
    }));
  };
  const setWed = (wed) => {
    setMakeStudy((input) => ({
      ...input,
      wed: wed,
    }));
  };
  const setThu = (thu) => {
    setMakeStudy((input) => ({
      ...input,
      thu: thu,
    }));
  };
  const setFri = (fri) => {
    setMakeStudy((input) => ({
      ...input,
      fri: fri,
    }));
  };
  const setSat = (sat) => {
    setMakeStudy((input) => ({
      ...input,
      sat: sat,
    }));
  };
  const setSun = (sun) => {
    setMakeStudy((input) => ({
      ...input,
      sun: sun,
    }));
  };
  const setAccountBank = (accountBank) => {
    setMakeStudy((input) => ({
      ...input,
      accountBank: accountBank,
    }));
  };
  const setAccount = (account) => {
    setMakeStudy((input) => ({
      ...input,
      account: account,
    }));
  };
  const setAccountName = (accountName) => {
    setMakeStudy((input) => ({
      ...input,
      accountName: accountName,
    }));
  };

  const setHour = (hour) => {
    setMakeStudy((input) => ({
      ...input,
      hour: hour,
    }));
  };

  const setMinute = (minute) => {
    setMakeStudy((input) => ({
      ...input,
      minute: minute,
    }));
  };

  const MakeStudyReset = () => {
    setMakeStudy({
      name: "",
      summary: "",
      description: "",
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
      sun: false,
      accountBank: "",
      account: "",
      accountName: "",
      hour: 0,
      minute: 0,
      money: 0,
      lateMoney: 0,
    });
  };

  return {
    name: makeStudy.name,
    summary: makeStudy.summary,
    description: makeStudy.description,
    mon: makeStudy.mon,
    tue: makeStudy.tue,
    wed: makeStudy.wed,
    thu: makeStudy.thu,
    fri: makeStudy.fri,
    sat: makeStudy.sat,
    sun: makeStudy.sun,
    accountBank: makeStudy.accountBank,
    account: makeStudy.account,
    accountName: makeStudy.accountName,
    hour: makeStudy.hour,
    minute: makeStudy.minute,
    setName,
    setSummary,
    setDescription,
    setMon,
    setTue,
    setWed,
    setThu,
    setFri,
    setSat,
    setSun,
    setAccountBank,
    setAccount,
    setAccountName,
    setHour,
    setMinute,
    MakeStudyReset,
  };
};
