import styled from "styled-components";
import { useReportCancelModal } from "../../../modal/recoil/hooks/useModals";

export default function AuthCancelBtn() {
  const { openModal } = useReportCancelModal();
  return <Button onClick={openModal}>인증 취소</Button>;
}

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  width: 108px;
  height: 40px;
  font-family: Pretendard;
`;
