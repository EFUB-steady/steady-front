import styled from "styled-components";

export default function AuthBtn() {
  return <Button>인증하기</Button>;
}

const Button = styled.button`
  width: 108px;
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

  //margin-right: 216px;
  &:hover {
    background: white;
    color: black;
  }
  &:active {
    background: white;
    color: black;
  }
`;
