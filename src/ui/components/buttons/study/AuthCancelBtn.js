import styled from "styled-components";

export default function AuthCancelBtn() {
  return <Button>인증 취소</Button>;
}

const Button = styled.button`
background-color: black;
color: white;
border-radius: 5px;
width: 108px;
height: 40px;
font-family: Pretendard;
`;
