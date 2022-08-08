import { Row } from "../commons/Row";
import { Subtitle3 } from "../../../core/texts";
import { usePenalty } from "../../../feature/penalty/recoil/usePenalty";

export default function PenaltyAmount() {
  const { penalty } = usePenalty();

  const renderNowFine = () => {
    let result = 0;
    for (let i = 0; i < penalty.length; i++) {
      result = result + penalty[i].nowFine;
    }
    return result;
  };

  return (
    <Row style={{ marginTop: 5 }}>
      <Subtitle3>{renderNowFine()}</Subtitle3>
      <div style={{ width: 5 }} />
      <Subtitle3>원</Subtitle3>
    </Row>
  );
}

//   // 벌금 계산 로직짜기
//   // 필요한 데이터
//   let submitTime = moment("2022-08-05 09:00:00"); // 제출 시간 - 경과 시간 계산
//   // -> 저장하기를 누른 시간 : 저장하기 누른 순간 데이터 보내고 그거 받아오기
//   let Now = new Date();

//   const lateMoney = 1000; //지각 시 정해놓은 벌금 (기준 시간당)
//   const absentMoney = 2000; //결석 시 정해놓은 벌금

//   const penalty = 0; // 신고 횟수 - (임시. 1회당 천원)

//   // 하루 1개의 스터디에서의 벌금 -> 이게 Id의 스터디 당 배열로 저장..
//   let OnedayStudyMoney =
//     lateMoney *
//       Math.round(moment.duration(submitTime.diff(Now)).asHours() / 24) +
//     absentMoney * Math.round(moment.duration(submitTime.diff(Now)).asDays()) +
//     penalty * 1000;

//   var addOdj = Object.assign({}, OnedayStudyMoney);

//   // 수정 **
//   // 하루 모든 스터디에서의 벌금
//   let OnedayAllStudyMoney = [addOdj];
//   const Sum = OnedayAllStudyMoney.reduce(function add(sum, currValue) {
//     return sum + currValue;
//   }, 0);

//   // 일주일 모든 스터디에서의 벌금
//   let WeekStudyMoney = [Sum];
//   const Result = WeekStudyMoney.reduce(function add(sum, currValue) {
//     return sum + currValue;
//   }, 0);

//   return (
//     <Row>
//       {/* 최종 벌금 : Result */}
//       <Body2>{OnedayStudyMoney}</Body2>
//       <div style={{ width: 5 }} />
//       <Subtitle2>원</Subtitle2>
//     </Row>
//   );
// }
