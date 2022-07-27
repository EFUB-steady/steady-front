import styled from "styled-components";
import { gray300 } from "../../../../core/colors";

export default function AuthCancelYesBtn() {
  return <Button>예(인증이 무효처리 됩니다.)</Button>;
}

const Button = styled.button`
background-color: ${gray300};
color: black;
border-radius: 5px;
width: 209px;
height: 48px;
font-family: Pretendard;
font-weight: 700;
font-size: 14px;
line-height: 100%;
text-align: center;
`;
