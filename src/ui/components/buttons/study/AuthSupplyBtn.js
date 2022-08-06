import { useState } from "react";
import styled from "styled-components";
import UploadStudySupplyModal from "../../../modal/modals/UploadStudySupplyModal";

export default function AuthSupplyBtn() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>지각 제출</Button>
      <UploadStudySupplyModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
  margin-right: 10px;

  &:hover {
    background: white;
    color: black;
  }
  &:active {
    background: white;
    color: black;
  }
`;
