import React, { useEffect } from "react";
import styled from "styled-components";
import { Dialog, DialogContent } from "@mui/material";
import StudyModalTitle from "../components/StudyModalTitle";
import { useStudyListDate } from "../../../feature/studyList/recoil/useStudyListDate";
import MemberListItem from "../components/MemberListItem";
import { useStudyListByDate } from "../../../feature/studies/studyListByDate/recoil/useStudyListByDate";
import { gray500 } from "../../../core/colors";

export default function StudyListModal({ isOpen, setIsOpen }) {
  const { selectedDate } = useStudyListDate();
  const { studyListByDate } = useStudyListByDate();

  const renderStudyList = () => {
    const result = [];
    if (studyListByDate.length == 0) {
      return <NoResultWrapper>등록된 인증이 없습니다.</NoResultWrapper>;
    } else {
      for (let i = 0; i < studyListByDate.length; i++) {
        result.push(<MemberListItem study={studyListByDate[i]} />);
      }
      return result;
    }
  };

  useEffect(() => {
    renderStudyList();
  }, [studyListByDate]);

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
            buttonText={""}
          />
          {renderStudyList()}
        </DialogContent>
      </ContentWrapper>
    </Dialog>
  );
}

const ContentWrapper = styled.div`
  margin: 80px 90px;
`;

const NoResultWrapper = styled.div`
  width: 200px;
  margin: 15px 0;
  padding: 10px;
  border-radius: 10px;
  text-align: center;
  justify-content: center;
  color: white;
  font-size: 14px;
  background-color: ${gray500};
`;
