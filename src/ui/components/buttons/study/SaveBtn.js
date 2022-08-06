import styled from "styled-components";
import { useMakeStudy } from "../../../../feature/MakeStudy/recoil/useMakeStudy";
import { useMakeStudyAPI } from "../../../../feature/MakeStudy/api/useMakeStudyAPI";

export default function SaveBtn() {
  const { MakeStudyReset } = useMakeStudy();
  const { makeStudyAPI } = useMakeStudyAPI();

  const {
    name,
    summary,
    description,
    mon,
    thu,
    wed,
    tue,
    fri,
    sat,
    sun,
    minute,
    hour,
    account,
    accountBank,
    accountName,
    money,
    lateMoney,
  } = useMakeStudy();

  const makeStudyHandler = () => {
    if (
      name !== "" &&
      summary !== "" &&
      description !== "" &&
      mon == false &&
      thu == false &&
      wed == false &&
      tue == false &&
      fri == false &&
      sat == false &&
      sun == false &&
      minute !== 0 &&
      hour !== 0 &&
      accountBank !== "" &&
      accountName !== "" &&
      account !== "" &&
      money !== 0 &&
      lateMoney !== 0
    ) {
      makeStudyAPI({
        onSuccess: () => {
          MakeStudyReset();
          console.log("추가했음");
        },
        onFail: () => {
          console.log("스터디 개설 실패");
        },
      });
    } else {
      console.log("아무것도 아님");
    }
  };
  return <Button onClick={() => makeStudyHandler()}>저장하기</Button>;
}

const Button = styled.button`
  background-color: black;
  color: white;
  width: 90px;
  height: 50px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  margin-left: 105px;
  font-family: "Pretendard-regular";
`;
