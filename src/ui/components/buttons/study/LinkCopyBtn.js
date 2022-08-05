import styled from "styled-components";
import { button2Color } from "../../../../core/colors";

export default function LinkCopyBtn() {
  return <Button>초대 링크 복사하기</Button>;
}

const Button = styled.button`
  width: 168px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${button2Color};
  margin-top: -10px;
`;
