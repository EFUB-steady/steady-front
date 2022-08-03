import styled from "styled-components";
import CustomLink from "../../commons/CustomLink";
import { textboxColor } from "../../../../core/colors";
import { hintColor } from "./../../../../core/colors";

export default function IndexFindId() {
  const pathname = window.location.pathname;

  return (
    <CustomLink to="/findid">
      <Button pathname={pathname}>Find Id</Button>
    </CustomLink>
  );
}

const Button = styled.button`
  /*박스*/
  background-color: ${(props) =>
    props.pathname == "/findid" ? "black" : textboxColor};
  color: ${(props) => (props.pathname == "/findid" ? "white" : hintColor)};

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
