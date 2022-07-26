import styled from "styled-components";
import { format } from "date-fns";

export default function DateAndBtn() {
  const today = new Date();
  const formattedToday = format(today, "MM월 dd일");

  return (
    <>
      <TitleBox>
        <Title>{formattedToday}</Title>
        <Button>저장하기</Button>
      </TitleBox>
    </>
  );
}

const TitleBox = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: black;
  line-height: 100%;
  margin-top: 3rem;
`;

const Button = styled.button`
  width: 108px;
  height: 40px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  margin-top: 3rem;
`;
