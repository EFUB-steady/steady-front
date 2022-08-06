import { useState } from "react";
import styled from "styled-components";
import ReportMoreModal from "../../../modal/modals/ReportMoreModal";

export default function ReportMoreBtn() {
  const [isOpenMore, setIsOpenMore] = useState(false);

  return (
    <>
      <ReportMoreModal isOpenMore={isOpenMore} setIsOpenMore={setIsOpenMore} />
      <Button onClick={() => setIsOpenMore(true)}>자세히 보기</Button>
    </>
  );
}

const Button = styled.button`
  width: 108px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;

  &:hover {
    background: white;
    color: black;
    border: 3px solid black;
  }
  &:active {
    background: white;
    color: black;
  }
`;
