import styled from "styled-components";

export default function BackToLogin() {
  return <Button>로그인 페이지로 돌아가기</Button>;
}

const Button = styled.button`
  width: 400px;
  height: 50px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
