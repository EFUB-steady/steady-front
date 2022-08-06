import styled from "styled-components";
import MainSubTitle from "../main/MainSubTitle";
import calenderIcon from "../../../assets/icon_calender.png";
import DaysSelectItem from "./DaysSelectItem";
import { useMakeStudy } from "../../../feature/MakeStudy/recoil/useMakeStudy";
import { useState } from "react";

export default function DaysSelect() {
  const {
    mon,
    tue,
    wed,
    thu,
    fri,
    sat,
    sun,
    setMon,
    setTue,
    setWed,
    setThu,
    setFri,
    setSat,
    setSun,
  } = useMakeStudy();

  const DAYS = [
    {
      day: "Sun",
      isClicked: sun,
      onClick: () => {
        setSun(!sun);
      },
    },
    {
      day: "Mon",
      isClicked: mon,
      onClick: () => {
        console.log("mon");
        setMon(!mon);
      },
    },
    {
      day: "Tue",
      isClicked: tue,
      onClick: () => {
        console.log("tue");
        setTue(!tue);
      },
    },
    {
      day: "Wed",
      isClicked: wed,
      onClick: () => {
        console.log("wed");
        setWed(!wed);
      },
    },
    {
      day: "Thu",
      isClicked: thu,
      onClick: () => {
        console.log("thu");
        setThu(!thu);
      },
    },
    {
      day: "Fri",
      isClicked: fri,
      onClick: () => {
        console.log("fri");
        setFri(!fri);
      },
    },
    {
      day: "Sat",
      isClicked: sat,
      onClick: () => {
        console.log("sat");
        setSat(!sat);
      },
    },
  ];

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
  min-width: 987px;
  border-right: 3px solid black;
  border-radius: 10px 10px 0 0;
`;
