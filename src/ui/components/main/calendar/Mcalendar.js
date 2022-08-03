import styled from "styled-components";
import "../../../../core/reset.css";
import Calendar from "react-calendar";
import { useStudyListDate } from "../../../../feature/studyList/recoil/useStudyListDate";
import { useEffect } from "react";
import { useStudyListModal } from "../../../modal/recoil/hooks/useModals";

// 제목
function NavigationLabel(month) {
  return (
    <>
      <Bold>{month} 일정</Bold>
    </>
  );
}

// 캘린더
function Mcalendar() {
  const today = new Date(); //오늘 날짜
  const yesterday = new Date(today.setDate(today.getDate() - 1));
  const { selectedDate, setSelectedDate } = useStudyListDate();
  const { openModal } = useStudyListModal();

  useEffect(() => {
    if (selectedDate.toDateString() == yesterday.toDateString()) openModal();
    if (selectedDate.toDateString() == today.toDateString()) openModal();
  }, [selectedDate]);

  return (
    <>
      <Container>
        <Calendar
          value={selectedDate}
          onChange={setSelectedDate}
          locale={"en"}
          calendarType={"US"}
          showNeighboringMonth
          navigationLabel={({ date }) =>
            NavigationLabel(
              date.toLocaleDateString("ko-KR", { month: "2-digit" }),
            )
          }
          prev2Label={null}
          next2Label={null}
          // 캘린더 안에 내용물
          tileContent={({ date }) => {
            const lastDate = new Date(
              date.getFullYear(),
              date.getMonth() + 1,
              0,
            ).getDate();

            return date.getDate() === lastDate ? (
              <div className="dot-container">
                <div className="dot"></div>
              </div>
            ) : null;
          }}
        />
      </Container>
    </>
  );
}

export default Mcalendar;

const Bold = styled.div`
  font-weight: bold;
  font-size: 2.5rem;
  font-family: "Bauhaus93";
`;

// react-calendar style 포함
// CSS 변수 통일 해놓기 - 지금 상태는 피그마에서 바로 가져온 값들

const Container = styled.div`
  display: flex;
  justify-content: center;
  min-width: 987px;
  margin: 42px 0;

  .react-calendar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    font-family: "Courier New";

    .react-calendar__navigation {
      padding: 1rem;

      font-size: 1.5rem;
      font-weight: bold;

      button {
        margin-left: 0.5rem;
      }
    }

    .react-calendar__month-view__weekdays {
      font-family: "bauhaus";
      font-family: "Bauhaus93";

      .react-calendar__month-view__weekdays__weekday {
        background-color: #fc3c49;
        border: 1px solid #000000;

        border-top: 2px solid #000000;

        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;

        color: #ffffff;

        display: flex;
        justify-content: center;

        abbr {
          font-size: 1.5rem;
          font-weight: bold;
          padding: 5px 0;
        }
      }
    }

    .react-calendar__month-view__days {
      border: 2px solid #000000;

      .react-calendar__month-view__days__day {
        position: relative;

        background-color: #ffffff;
        border: 1px solid #000000;
        height: 0;
        padding: 0px;
        padding-bottom: calc(80% / 7);

        display: flex;
        justify-content: flex-end;

        abbr {
          padding: 8px;
          font-size: 1.5rem;
          font-weight: bold;
        }
      }

      .dot-container {
        position: absolute;
        display: flex;

        width: 100%;
        height: 100%;

        .dot {
          margin-top: 10px;
          margin-left: 8px;

          width: 65%;
          height: 80%;

          background: radial-gradient(farthest-side, #fc3c49 100%, transparent)
              top left/23% 23%,
            radial-gradient(farthest-side, #ffa500 100%, transparent) top
              center/23% 23%,
            radial-gradient(farthest-side, #ffd600 100%, transparent) top
              right/23% 23%,
            radial-gradient(farthest-side, #26c983 100%, transparent) left
              center/23% 23%,
            radial-gradient(farthest-side, #9be23f 100%, transparent) center/23%
              23%,
            radial-gradient(farthest-side, #43bbff 100%, transparent) right
              center/23% 23%,
            radial-gradient(farthest-side, #286ccf 100%, transparent) bottom
              left/23% 23%,
            radial-gradient(farthest-side, #ff5cef 100%, transparent) bottom
              center/23% 23%,
            radial-gradient(farthest-side, #934cff 100%, transparent) bottom
              right/23% 23%;

          background-repeat: no-repeat;
        }
      }

      .react-calendar__tile--now {
        background-color: #eeeeee;
        abbr {
          text-decoration: underline;
        }
      }

      .react-calendar__month-view__days__day--neighboringMonth {
        abbr,
        .dot-container {
          display: none;
        }
      }
    }
  }
`;

const Button = styled.button`
  width: 10px;
  height: 40px;
  border-radius: 5px;
  border: 3px solid black;
  background: black;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: white;
`;
