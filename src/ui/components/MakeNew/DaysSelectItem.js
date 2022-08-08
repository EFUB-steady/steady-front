import styled from "styled-components";
import { gray100, gray400 } from "../../../core/colors";
import { useState } from "react";

export default function DaysSelectItem({ day }) {

  return (
    <Box onClick={day.onClick} isClicked={day.isClicked}>
      {day.day}
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  width: 100%;
  border: 3px solid black;
  border-right: 0;
  border-radius: 10px 10px 0 0;

  background-color: ${(props) => (props.isClicked ? "black" : "white")};
  justify-content: center;
  align-items: center;
  font-family: "Bauhaus93";
  font-size: 24px;
  color: ${(props) => (props.isClicked ? "white" : "black")};};

  &:hover {
    background-color: black;
    color: white;
  }
  &:active {
    background: black;
    color: white;
  }
`;
