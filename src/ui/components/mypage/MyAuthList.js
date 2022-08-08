import { Divider } from "@mui/material";
import { useEffect } from "react";
import styled from "styled-components";
import { useStudyListByUser } from "../../../feature/studies/studyListByUser/recoil/useStudyListByUser";
import MyAuthListItem from "./MyAuthListItem";

export default function MyAuthList() {
  const { studyListByUser } = useStudyListByUser();

  const renderNoResult = () => {
    if (studyListByUser.length == 0) {
      return <div>등록된 인증이 없습니다.</div>;
    }
  };

  const renderAuthList1 = () => {
    const result = [];
    if (studyListByUser.length != 0) {
      for (let i = 0; i < studyListByUser.length; i++) {
        if (studyListByUser[i].studyId == 53) {
          result.push(
            <MyAuthListItem
              title="EFUB 운동 스터디"
              auth={studyListByUser[i]}
            />,
          );
        }
      }
    }
    {
      return result;
    }
  };

  const renderAuthList2 = () => {
    const result = [];
    if (studyListByUser.length != 0) {
      for (let i = 0; i < studyListByUser.length; i++) {
        if (studyListByUser[i].studyId == 55) {
          result.push(
            <MyAuthListItem
              title="잔디 채우기 스터디"
              auth={studyListByUser[i]}
            />,
          );
        }
      }
    }
    {
      return result;
    }
  };

  useEffect(() => {
    renderAuthList1();
  }, [studyListByUser]);

  return (
    <ListContaniner>
      {renderNoResult()}
      {renderAuthList1()}
      <Divider style={{ marginTop: 20, marginBottom: 10 }} />
      {renderAuthList2()}
    </ListContaniner>
  );
}

const ListContaniner = styled.div`
  overflow: scroll;
  overflow-x: hidden;
  height: 450px;
  box-sizing: border-box;
  width: 520px;
  margin-top: 20px;
`;
