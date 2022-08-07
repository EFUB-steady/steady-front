import styled from "styled-components";

import CustomLink from "../commons/CustomLink";
export default function TodayAuthBtn() {
  <CustomLink to="/authpage">
    <Button>오늘의 스터디 인증하기</Button>
  </CustomLink>;
}

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
