import styled from "styled-components";
import { useReportCancelModal } from "../../../modal/recoil/hooks/useModals";
import { useState } from "react";
import ReportCancelModal from "../../../modal/modals/ReportCancelModal";

export default function AuthCancelBtn() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>인증 취소</Button>
      <ReportCancelModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  width: 108px;
  height: 40px;
  font-family: Pretendard;
`;
