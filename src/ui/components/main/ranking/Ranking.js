import RankingList from "./RankingList";
import rankicon from "../../../../assets/icon_rank.png";
import MainSubTitle from "../MainSubTitle";
import styled from "styled-components";

const getWeeksInMonth = (inputDate) => {
  let year = inputDate.getFullYear();
  let month = inputDate.getMonth();
  let firstDate = new Date(year, month, 1);
  let lastDate = new Date(year, month + 1, 0);
  let firstWeekDay = firstDate.getDay();
  let lastWeekDay = lastDate.getDay();
  let weeksInMonth = Math.ceil((firstWeekDay - 1 + lastDate.getDate()) / 7);
  if (lastWeekDay === 0 || lastWeekDay === 1 || lastWeekDay === 2) {
    weeksInMonth -= 1;
  }
  return weeksInMonth;
};

export const weekNumberBySunday = (inputDate) => {
  let year = inputDate.getFullYear();
  let month = inputDate.getMonth();
  let date = inputDate.getDate();
  let firstDate = new Date(year, month, 1);
  let lastDate = new Date(year, month + 1, 0);
  let firstWeekDay = firstDate.getDay();
  let lastWeekDay = lastDate.getDay();
  let offsetDate = date + firstWeekDay - 1;
  let weeksInMonth = Math.ceil((firstWeekDay - 1 + lastDate.getDate()) / 7);
  if (lastWeekDay === 0 || lastWeekDay === 1 || lastWeekDay === 2) {
    weeksInMonth -= 1;
  }
  let index = 1;
  if (firstWeekDay === 4 || firstWeekDay === 5 || firstWeekDay === 6) {
    index = 0;
  }
  let week = Math.floor(offsetDate / 7) + index;
  if (week === 0) {
    week = getWeeksInMonth(new Date(year, month, 0));
    return { month: month, week };
  }
  return week <= weeksInMonth
    ? { month: month + 1, week }
    : { month: month + 2, week };
};

export default function Ranking() {
  const today = new Date();
  const month = weekNumberBySunday(today);

  return (
    <Wrapper>
      <MainSubTitle
        iconSrc={rankicon}
        title={`${month.month}월 ${month.week}주차 랭킹`}
      />
      <RankingList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
