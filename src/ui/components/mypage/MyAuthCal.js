import styled from "styled-components";
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import { getYear } from "date-fns";
registerLocale("ko", ko);
const _ = require("lodash");

const MyAuthList = () => {
  const [startDate, setStartDate] = useState(new Date());

  const years = _.range(1990, getYear(new Date()) + 1, 1);
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <>
      <Text>나의 인증 목록</Text>
      <DatePicker
        showPopperArrow={false}
        fixedHeight
        style={{
          content: "e99c",
          position: "absolute",
          fontSize: "1rem",
        }}
        dateFormat="yyyy/MM/dd"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          preMonthbuttonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div>
            {" "}
            <button
              onClick={decreaseMonth}
              disabled={preMonthbuttonDisabled}
            ></button>
            <div>
              {date.getFullYear()}년 {months[date.getMonth()]}
              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
              ></button>
            </div>
          </div>
        )}
      />
    </>
  );
};

export default MyAuthList;

const Text = styled.div`
  width: 200px;
  height: 21px;
  margin-top: 40px;
  margin-bottom: 23px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
`;
