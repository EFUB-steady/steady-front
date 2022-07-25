import styled from "styled-components";
import UserJoinBtn from "../buttons/user/UserJoinBtn";
import { hintColor } from "../../../core/colors";
import { Subtitle3 } from "./../../../core/texts";
export default function SignInfo() {
  return (
    <>
      <SignBox>
        <Text>
          <Subtitle3>이름 (실명)</Subtitle3>
        </Text>
        <InputBox>김이화</InputBox>
      </SignBox>
      <SignBox>
        <Text>
          <Subtitle3>닉네임</Subtitle3>
        </Text>
        <InputBox>김이화</InputBox>
      </SignBox>
      <SignBox>
        <Text>
          <Subtitle3>휴대폰 번호</Subtitle3>
        </Text>
        <InputBox>010-0000-0000</InputBox>
      </SignBox>
      <SignBox>
        <Text>
          <Subtitle3>이메일 아이디</Subtitle3>
        </Text>
        <InputBox>ewhakim@mail.com</InputBox>
      </SignBox>
      <SignBox>
        <Text>
          <Subtitle3>비밀번호</Subtitle3>
        </Text>
        <InputBox>영문/숫자/특수문자 중 2가지 이상 조합, 8자 이상</InputBox>
      </SignBox>
      <SignBox>
        <Text>
          <Subtitle3>비밀번호 확인</Subtitle3>
        </Text>
        <InputBox>영문/숫자/특수문자 중 2가지 이상 조합, 8자 이상</InputBox>
      </SignBox>
      <BtnBox>
        <Text></Text>
        <UserJoinBtn />
      </BtnBox>
    </>
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
`;

const InputBox = styled.div`
  /*박스*/
  width: 300px;
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

const BtnBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 25px;
`;
