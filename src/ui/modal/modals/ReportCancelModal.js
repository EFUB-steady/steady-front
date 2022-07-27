import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { useReportCancelModal } from "../recoil/hooks/useModals";
import ReportCancle from "../recoil/components/ReportCancel";

{/*최종 신고 팝업 부분 Modal입니다. 신고_자세히보기 창에서 인증 취소 버튼을 누르면
나타나는 모달이고 인증 취소 버튼은 ReportMoreModalTItle.js 파일에서 호출되며
취소 버튼의 파일명은 AuthCancelBtn.js 입니다! 현재 Hook까진 완료된 상태지만,
그 전의 모달이 뜨지 못해서 이것도 모달 뜨는 것까지 진행하진 못하였습니다*/}

export default function ReportCancelModal() {
  const { isOpen, closeModal } = useReportCancelModal();

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        <DialogContent>
          <ReportCancle />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
`;
