import styled from "styled-components";
import { hintColor } from "../../../core/colors";
import { Subtitle3 } from "./../../../core/texts";
export default function FindId1st() {
  return (
    <ContentWrapper>
      <SignBox>
        <Text>
          <Subtitle3>이름 (실명)</Subtitle3>
        </Text>
        <InputBox>김이화</InputBox>
      </SignBox>
      <SignBox>
        <Text>
          <Subtitle3>휴대폰 번호</Subtitle3>
        </Text>
        <InputBox>010-0000-0000</InputBox>{" "}
      </SignBox>{" "}
    </ContentWrapper>
  );
}
const Text = styled.div`
  width: 155px;
  height: 42px;
  display: flex;
  align-items: center;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
  padding: 1.5rem;
`;

const InputBox = styled.div`
  /*박스*/
  width: 240px;
  height: 42px;
  background: #eeeeee;
  border-radius: 5px;

  /*글씨*/
  color: ${hintColor};
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  display: flex;
  align-items: center;
  padding-left: 17.15px;
`;
const ContentWrapper = styled.div``;
