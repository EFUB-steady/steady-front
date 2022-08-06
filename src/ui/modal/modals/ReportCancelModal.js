import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { useReportCancelModal } from "../recoil/hooks/useModals";

import { Body2, Subtitle2 } from "../../../core/texts";
import AuthCancelYesBtn from "../../../ui/components/buttons/study/AuthCancelYesBtn";
import AuthCancelNoBtn from "../../../ui/components/buttons/study/AuthCancelNoBtn";

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
          <Wrapper>
            <Subtitle2>인증 취소</Subtitle2>
            <SecondWrapper>
              <Body2>00000님 05월 00일자</Body2>
              <Body2>인증을 취소하시겠습니까?</Body2>
            </SecondWrapper>
            <ButtonWrapper>
              <div style={{ marginRight: "12px" }}>
                <AuthCancelYesBtn />
              </div>
              <div>
                <AuthCancelNoBtn />
              </div>
            </ButtonWrapper>
          </Wrapper>
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div``;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
`;
