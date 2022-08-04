import styled from "styled-components";
import { textboxColor } from "../../../../core/colors";
import CustomLink from "../../commons/CustomLink";

export default function IndexMyPage() {
  const pathname = window.location.pathname;

  return (
    <CustomLink to="/mypage">
      <Button pathname={pathname}>MY PAGE</Button>
    </CustomLink>
  );
}

const Button = styled.button`
  /*박스*/
  background-color: ${(props) =>
    props.pathname == "/mypage" ? "black" : textboxColor};
  color: ${(props) => (props.pathname == "/mypage" ? "white" : "black")};

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
