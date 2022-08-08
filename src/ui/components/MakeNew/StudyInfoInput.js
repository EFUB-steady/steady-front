import styled from "styled-components";
import MainSubTitle from "../main/MainSubTitle";
import iconSetting from "../../../assets/icon_setting.png";
import { useState } from "react";
import { Input } from "@mui/material";
import { gray100 } from "../../../core/colors";
import { Row } from "../commons/Row";
import SaveBtn from "../buttons/study/SaveBtn";
import GoBackBtn from "../buttons/common/GoBackBtn";
import { useMakeStudy } from "../../../feature/MakeStudy/recoil/useMakeStudy";

export default function StudyInfoInput() {
  const { name, summary, description, setName, setSummary, setDescription } =
    useMakeStudy();

  return (
    <>
      <TopWrapper>
        <GoBackBtn />
        <div style={{ marginBottom: "15px", marginLeft: "20px" }}>
          <MainSubTitle iconSrc={iconSetting} title={"스터디 설정"} />
        </div>
      </TopWrapper>
      <Row>
        <Input
          placeholder="스터디 이름"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          fullWidth={true}
          disableUnderline={true}
          style={{
            backgroundColor: gray100,
            padding: "8px",
            fontSize: 40,
            fontWeight: 700,
            height: 55,
            fontFamily: "pretendard",
            marginBottom: "10px",
          }}
        />
        <SaveBtn />
      </Row>

      <Input
        placeholder="스터디를 요약해주세요(15자 이내)"
        value={summary}
        onChange={(e) => {
          summary.length < 15
            ? setSummary(e.target.value)
            : setSummary(e.target.value.substring(0, 15));
        }}
        fullWidth={true}
        multiline={true}
        disableUnderline={true}
        style={{
          backgroundColor: gray100,
          padding: "8px",
          fontSize: 15,
          fontFamily: "pretendard",
        }}
      />

      <Content>
        <Input
          placeholder="200자 이내의 간단한 스터디 소개"
          value={description}
          onChange={(e) => {
            description.length < 200
              ? setDescription(e.target.value)
              : setDescription(e.target.value.substring(0, 200));
          }}
          fullWidth={true}
          multiline={true}
          disableUnderline={true}
          style={{
            backgroundColor: gray100,
            padding: "8px",
            fontSize: 18,
            fontFamily: "pretendard",
          }}
        />
      </Content>
    </>
  );
}

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Content = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-height: 149px;
  background-color: ${gray100};
  border: 3px solid #000000;
  border-radius: 5px;
  line-height: 36px;
  padding: 15px;
  margin-top: 15px;
`;
