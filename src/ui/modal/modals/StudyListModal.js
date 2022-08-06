import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import StudyModalTitle from "../components/StudyModalTitle";
import { useStudyListDate } from "../../../feature/studyList/recoil/useStudyListDate";
import MemberList from "../components/MemberList";
import MemberListItem from "../components/MemberListItem";

export default function StudyListModal({ isOpen, setIsOpen }) {
  const { selectedDate } = useStudyListDate();

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="false"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        <DialogContent>
          <StudyModalTitle
            date={selectedDate}
            titleText={"스터디 인증목록"}
            buttonText={"인증하기"}
          />

          <MemberList />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
