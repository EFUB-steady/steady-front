import styled from "styled-components";
import { format } from "date-fns";
import CustomLink from "../commons/CustomLink";

export default function DateAndBtn() {
  const today = new Date();
  const formattedToday = format(today, "MM월 dd일");

  return (
    <>
      <TitleBox>
        <Title>{formattedToday}</Title>
      </TitleBox>
    </>
  );
}

const TitleBox = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  margin-top: 1.5rem;
`;

const Title = styled.div`
  font-size: 40px;
  font-weight: 500;
  color: black;
  line-height: 100%;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
  background: black;
  border-radius: 5px;
  border: 3px solid black;
  color: white;
  margin: 4px;
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;

  &:hover {
    background: white;
    color: black;
  }
  &:active {
    background: white;
    color: black;
  }
`;
