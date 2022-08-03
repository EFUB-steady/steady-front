import styled from "styled-components";
import { useUploadStudySupplyModal } from "../../../modal/recoil/hooks/useModals";

export default function AuthSupplyBtn() {
  const { openModal } = useUploadStudySupplyModal();
  return <Button onClick={openModal}>지각 제출</Button>;
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
