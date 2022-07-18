import MainSubTitle from "../main/MainSubTitle";
import iconMegaphone from "../../../assets/icon_megaphone.png";
import styled from "styled-components";
import { Input } from "@mui/material";
import { gray100 } from "../../../core/colors";
import { useState } from "react";

export default function NoticeInput() {
  const [noticeInput1st, setNoticeInput1st] = useState("");
  const [noticeInput2nd, setNoticeInput2nd] = useState("");
  const [noticeInput3rd, setNoticeInput3rd] = useState("");

  return (
    <Wrapper>
      <MainSubTitle iconSrc={iconMegaphone} title={"공지 텍스트 입력"} />

      <Content>
        <Input
          placeholder="· 스터디는 ___개월 간 진행합니다."
          value={noticeInput1st}
          onChange={(e) => {
            setNoticeInput1st(e.target.value);
          }}
          fullWidth={true}
          disableUnderline={true}
          style={{
            backgroundColor: gray100,
            fontSize: 18,
          }}
        />
        <Input
          placeholder="· 모인 벌금은 ______으로 사용합니다."
          value={noticeInput2nd}
          onChange={(e) => {
            setNoticeInput2nd(e.target.value);
          }}
          fullWidth={true}
          disableUnderline={true}
          style={{
            backgroundColor: gray100,
            fontSize: 18,
          }}
        />
        <Input
          placeholder="· 무단 결석은 __번까지 가능합니다. ___번 초과하면 이 스터디에서 탈퇴됩니다."
          value={noticeInput3rd}
          onChange={(e) => {
            setNoticeInput3rd(e.target.value);
          }}
          fullWidth={true}
          disableUnderline={true}
          style={{
            backgroundColor: gray100,
            fontSize: 18,
          }}
        />
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;

const Content = styled.div`
  box-sizing: border-box;
  min-width: 987px;
  background-color: ${gray100};
  border: 3px solid #000000;
  border-radius: 5px;
  line-height: 36px;
  padding: 24px 30px;
  margin-top: 24px;
`;
