import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { useUploadStudyModal } from "../recoil/hooks/useModals";
import ReportMoreModalTitle from "../recoil/components/ReportMoreModalTitle";
import { ReportStudyModalPic } from "../recoil/components/ReportStudyModalPic";
import { StudyModalUrl } from "../recoil/components/StudyModalUrl";

{/* 피그마의 최종 신고 자세히 보기 부분 Modal창입니다. 현재는
Modal이 띄워지지 않으며, 모달을 띄우기 위해 notion에 적혀 있는 대로
완료했으며, 자세히보기 버튼을 눌러야 띄워져야 합니다.
자세히 보기 버튼은 ReportMoreBtn.js 이며, ReportItem.js 부분에서 호출되어 있습니다.*/}

export default function UploadStudyModal() {
  const { isOpen, closeModal } = useUploadStudyModal();

  return (
    <Dialog
      open={isOpen}
      onClose={closeModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="false"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        <DialogContent>
          <ReportMoreModalTitle />
          <ReportStudyModalPic/>
          <StudyModalUrl/>
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
