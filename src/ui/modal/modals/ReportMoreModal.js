import React from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import ReportMoreModalTitle from "../components/ReportMoreModalTitle";
import { ReportStudyModalPic } from "../components/ReportStudyModalPic";
import { StudyModalUrl } from "../components/StudyModalUrl";

export default function ReportMoreModal({ isOpenMore, setIsOpenMore }) {
  return (
    <Dialog
      open={isOpenMore}
      onClose={() => setIsOpenMore(false)}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="false"
      sx={{ whiteSpace: "break-spaces" }}
    >
      <ContentWrapper>
        <DialogContent>
          <ReportMoreModalTitle setIsOpenMore={setIsOpenMore} />
          <ReportStudyModalPic />
          <StudyModalUrl />
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;
