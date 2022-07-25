import styled from "styled-components";
import { useUploadStudyModal } from "../../../modal/recoil/hooks/useModals";

export default function AuthBtn() {
  const { openModal } = useUploadStudyModal();
  return <Button onClick={openModal}>인증하기</Button>;
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

  &:hover {
    background: white;
    color: black;
  }
  &:active {
    background: white;
    color: black;
  }
`;
