import { useState } from "react";
import styled from "styled-components";
import { BLACK100, RED500, WHITE100 } from "../../../../core/colors";
import "./Style.css";
import moment from "moment";

//해보자 다시는 회피하지 않기로 했잖아! 지키자

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());

  const today = getMoment;
  //캘린더 설정 : 첫주 & 막주
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;

    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone() //새로운 객체 반환
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");

              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <td key={index} style={{ backgroundColor: "#DADDDF" }}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <td key={index} style={{ backgroundColor: "#EEEEEE" }}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span>{days.format("D")}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };

  return (
    <div className="App">
      <div className="control">
        <Title>{today.format("MM월 일정")}</Title>
      </div>
      <table>
        <tbody>{calendarArr()}</tbody>
      </table>
    </div>
  );
};
export default Calendar;

const DayofWeek = styled.div`
  flexdirection: column;
`;

const Button = styled.button`
  /*박스*/
  background-color: ${RED500};
  color: ${WHITE100};
  height: 50px;
  margin-right: 5px;
  width: 220px;

  /*테두리*/
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 3px solid ${BLACK100};
  border-bottom: none;

  /*텍스트*/
  text-align: center;
  font-family: "Bauhaus93";
  font-weight: 500;
  font-size: 40px;
  line-height: 100%;

  /*간격*/
  margin: 0;
`;

const Title = styled.div`
  font-family: "Bauhaus93";
  font-size: 45px;
  padding-top: 78.2px;
`;
