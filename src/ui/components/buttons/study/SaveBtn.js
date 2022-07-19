import styled from "styled-components";

export default function SaveBtn() {
  return <Button>저장하기</Button>;
}

const Button = styled.button`
  background-color: black;
  color: white;
  width: 81px;
  height: 36px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  margin-left: 105px;
  font-family: "Pretendard-regular";
`;
