import styled from "styled-components";
import MainSubTitle from "../main/MainSubTitle";
import calenderIcon from "../../../assets/icon_calender.png";
import DaysSelectItem from "./DaysSelectItem";

const DAYS = [
  {
    day: "Sun",
    onClick: () => {
      console.log("sun");
    },
  },
  {
    day: "Mon",
    onClick: () => {
      console.log("mon");
    },
  },
  {
    day: "Tue",
    onClick: () => {
      console.log("tue");
    },
  },
  {
    day: "Wed",
    onClick: () => {
      console.log("wed");
    },
  },
  {
    day: "Thr",
    onClick: () => {
      console.log("thr");
    },
  },
  {
    day: "Fri",
    onClick: () => {
      console.log("fri");
    },
  },
  {
    day: "Sat",
    onClick: () => {
      console.log("sat");
    },
  },
];

export default function DaysSelect() {
  return (
    <Wrapper>
      <MainSubTitle iconSrc={calenderIcon} title={"스터디 인증 요일 선택"} />
      <Content>
        {DAYS.map((day) => (
          <DaysSelectItem key={day.day} day={day} />
        ))}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const Content = styled.div`
  display: flex;
  height: 145px;
  border-right: 3px solid black;
  border-radius: 10px 10px 0 0;
`;
