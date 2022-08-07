import { atom } from "recoil";

export const makeStudyState = atom({
  key: "makeStudyState",
  default: {
    name: "",
    summary:"",
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
    accountName:"",
    hour: 0,
    minute: 0,
    money: 0,
    lateMoney: 0,
  },
});
