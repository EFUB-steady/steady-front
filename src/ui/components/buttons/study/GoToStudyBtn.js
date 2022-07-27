import styled from "styled-components";

export default function GoToStudyBtn() {
  return <Button>스터디 페이지로 이동</Button>;
}

const Button = styled.button`
  background-color: black;
  color: white;
  width: 170px;
  height: 40px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 700;
  margin-left: 15px;
  font-family: "Pretendard-regular";
`;
