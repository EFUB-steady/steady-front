import MainSubTitle from "../main/MainSubTitle";
import iconMegaphone from "../../../assets/icon_megaphone.png";
import styled from "styled-components";
import { Input } from "@mui/material";
import { gray100 } from "../../../core/colors";
import { useState } from "react";
import { Row } from "../commons/Row";

export default function NoticeInput() {
  const [noticeInput1st, setNoticeInput1st] = useState("");

  return (
    <>
      <MainSubTitle iconSrc={iconMegaphone} title={"공지 텍스트 입력"} />
      <Content>
        <Row>
          <Input
            placeholder="스터디는 ___개월 간 진행합니다. 늦지 말고 출석하세요."
            value={noticeInput1st}
            onChange={(e) => {
              setNoticeInput1st(e.target.value);
            }}
            fullWidth={true}
            disableUnderline={true}
            style={{
              backgroundColor: gray100,
              fontSize: 18,
              fontFamily: "pretendard",
            }}
          />
        </Row>
      </Content>
    </>
  );
}

const Content = styled.div`
  box-sizing: border-box;
  min-width: 987px;
  background-color: ${gray100};
  border: 3px solid #000000;
  border-radius: 5px;
  line-height: 36px;
  padding: 24px 30px;
`;
