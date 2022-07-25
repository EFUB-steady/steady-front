import styled from "styled-components";
import MainSubTitle from "../main/MainSubTitle";
import iconSetting from "../../../assets/icon_setting.png";
import { useState } from "react";
import { Input } from "@mui/material";
import { gray100 } from "../../../core/colors";
import { Row } from "../commons/Row";
import SaveBtn from "../buttons/study/SaveBtn";

export default function StudyInfoInput() {
  const [titleInput, setTitleInput] = useState("");
  const [infoInput, setInfoInput] = useState("");

  return (
    <>
      <MainSubTitle iconSrc={iconSetting} title={"스터디 설정"} />
      <Row>
        <Input
          placeholder="스터디 이름"
          value={titleInput}
          onChange={(e) => {
            setTitleInput(e.target.value);
          }}
          fullWidth={true}
          disableUnderline={true}
          style={{
            backgroundColor: gray100,
            padding: "8px",
            fontSize: 40,
            fontWeight: 700,
            height: 55,
          }}
        />
        <SaveBtn />
      </Row>
      <Content>
        <Input
          placeholder="200자 이내의 간단한 스터디 소개"
          value={infoInput}
          onChange={(e) => {
            infoInput.length < 200
              ? setInfoInput(e.target.value)
              : setInfoInput(e.target.value.substring(0, 200));
          }}
          fullWidth={true}
          multiline={true}
          disableUnderline={true}
          style={{
            backgroundColor: gray100,
            padding: "8px",
            fontSize: 18,
          }}
        />
      </Content>
    </>
  );
}

const Content = styled.div`
  box-sizing: border-box;
  min-width: 987px;
  height: 149px;
  background-color: ${gray100};
  border: 3px solid #000000;
  border-radius: 5px;
  line-height: 36px;
  padding: 15px;
  margin-top: 15px;
`;
