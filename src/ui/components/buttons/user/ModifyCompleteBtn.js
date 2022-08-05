import styled from "styled-components";

export default function ModifyCompleteBtn() {
  return <Button>수정 완료</Button>;
}

const Button = styled.button`
  width: 108px;
  height: 40px;
  background: black;
  border-radius: 5px;
  color: white;

  text-align: center;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
`;
