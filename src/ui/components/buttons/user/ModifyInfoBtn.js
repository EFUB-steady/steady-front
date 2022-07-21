import styled from "styled-components";

export default function ModifyInfoBtn() {
  return <Button>정보 수정</Button>;
}

const Button = styled.button`
  width: 108px;
  height: 40px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
`;
