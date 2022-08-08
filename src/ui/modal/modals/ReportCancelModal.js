import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import { Subtitle2, Body2 } from "../../../core/texts";
import { gray300 } from "../../../core/colors";

export default function ReportCancelModal({
  isOpenCancel,
  setIsOpenCancel,
  setIsOpenMore,
}) {
  const onCloseHandler = () => {
    setIsOpenCancel(false);
    setIsOpenMore(false);
  };

  return (
    <Dialog
      open={isOpenCancel}
      onClose={() => onCloseHandler()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="sm"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        <DialogContent>
          <Subtitle2>인증 취소</Subtitle2>
          <SecondWrapper>
            <Body2>00000님 05월 00일자</Body2>
            <Body2>인증을 취소하시겠습니까?</Body2>
          </SecondWrapper>
          <ButtonWrapper>
            <div style={{ marginRight: "12px" }}>
              <Button>예(인증이 무효처리 됩니다.)</Button>
            </div>
            <Button onClick={() => onCloseHandler()}>돌아가기</Button>
          </ButtonWrapper>
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
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

const Button = styled.button`
  background-color: ${gray300};
  color: black;
  border-radius: 5px;
  width: 97px;
  height: 48px;
  font-family: "Pretendard";
  font-weight: 700;
  font-size: 14px;
  line-height: 100%;
  text-align: center;
`;
