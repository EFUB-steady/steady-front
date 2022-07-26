import styled from "styled-components";
import { textboxColor } from "../../../../core/colors";
import { hintColor } from "./../../../../core/colors";
import CustomLink from "../../commons/CustomLink";
import React, { useState } from "react";

const IndexFindPw = () => {
  const [color, setColor] = useState("black");

  const onClick = () => {
    color === "black" ? setColor("gray") : setColor("black");
  };

  return (
    <CustomLink to="/findpw">
      <Button color={color} onClick={onClick}>
        Find PW
      </Button>
    </CustomLink>
  );
};

export default IndexFindPw;

const Button = styled.button`
  /*박스*/
  /* background-color: ${textboxColor}; */
  background-color: ${(props) => props.color};
  color: black;
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
  color: ${hintColor};

  /*간격*/
  margin: 0;
`;
