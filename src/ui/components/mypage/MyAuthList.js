import styled from "styled-components";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const MyAuthList = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <Text>나의 인증 목록</Text>
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
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
