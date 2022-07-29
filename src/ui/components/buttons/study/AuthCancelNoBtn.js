import styled from "styled-components";
import { gray300 } from "../../../../core/colors";

export default function AuthCancelNoBtn() {
  return <Button>돌아가기</Button>;
}

const Button = styled.button`
background-color: ${gray300};
color: black;
border-radius: 5px;
width: 97px;
height: 48px;
font-family: Pretendard;
font-weight: 700;
font-size: 14px;
line-height: 100%;
text-align: center;
`;
