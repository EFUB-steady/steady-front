import styled from "styled-components";
import { textboxColor } from "../../../../core/colors";

export default function IndexFindId() {
  return <Button>Find Id</Button>;
}

const Button = styled.button`
  /*박스*/
  background-color: black;
  color: white;
  height: 48px;

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

  /*간격*/
  margin: 0;
`;
