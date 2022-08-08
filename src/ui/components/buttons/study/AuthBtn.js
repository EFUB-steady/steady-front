import { useState } from "react";
import styled from "styled-components";
import UploadStudyModal from "../../../modal/modals/UploadStudyModal";

export default function AuthBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>인증하기</Button>
      <UploadStudyModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
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
