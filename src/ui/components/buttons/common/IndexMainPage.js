import styled from "styled-components";
import React, { useState } from "react";
import { textboxColor } from "../../../../core/colors";
import CustomLink from "../../commons/CustomLink";

export default function IndexMainPage() {
  const pathname = window.location.pathname;

  
  return (
    <CustomLink to="/studies/7">
      <Button pathname={pathname}>MAIN PAGE</Button>
    </CustomLink>
  );
}

const Button = styled.button`
  /*박스*/
  background-color: ${(props) =>
    props.pathname == "/studies/7" ? "black" : textboxColor};
  color: ${(props) => (props.pathname == "/studies/7" ? "white" : "black")};
  height: 48px;
  margin-right: 5px;
  width: 200px;

  /*테두리*/
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 3px solid black;
  border-bottom: none;

  /*텍스트*/
  text-align: center;
  font-family: "Bauhaus93";
  font-style: normal;
  font-weight: 400;
  font-size: 21px;
  line-height: 100%;

  //display: block; //텍스트 세로 정렬 하기 위한 시도들
  /* padding-left: 1rem;
padding-right: 1rem; */
  //padding: 5px 0;

  /*간격*/
  margin: 0;

  &:hover {
    background: black;
    color: white;
  }
  &:active {
    background: black;
    color: white;
  }
`;
