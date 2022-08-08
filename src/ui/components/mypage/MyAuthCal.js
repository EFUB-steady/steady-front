import styled from "styled-components";
import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko";
import Form from "react-bootstrap/Form";
import { getYear } from "date-fns";
import { useStudyListDate } from "../../../feature/studyList/recoil/useStudyListDate";
registerLocale("ko", ko);
const _ = require("lodash");

const MyAuthList = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { setSelectedDate } = useStudyListDate();

  const onChangeHandler = (date) => {
    setStartDate(date);
    setSelectedDate(date);
  };

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
        locale={ko}
        showPopperArrow={false}
        fixedHeight
        style={{
          content: "e99c",
          position: "absolute",
          fontSize: "1rem",
        }}
        // minDate={new Date()}
        dateFormat="yyyy/MM/dd (eee)"
        selected={startDate}
        onChange={(date) => onChangeHandler(date)}
        customInput={
          <Form.Control
            as="textarea"
            rows={1}
            style={{
              width: "250px",
            }}
          />
        }
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          preMonthbuttonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div>
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
  height: 21px;
  margin-top: 40px;
  margin-bottom: 23px;

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  line-height: 100%;
`;
