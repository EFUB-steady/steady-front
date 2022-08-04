import styled from "styled-components";
import { hintColor } from "../../../core/colors";
import { Subtitle3 } from "../../../core/texts";
import { useSignUp } from "../../../feature/SignUp/recoil/useSignUp";
import TextField from "@mui/material/TextField";

export default function SignUpItem() {
  const {
    name,
    nickname,
    email,
    password,
    phone,
    setName,
    setNickName,
    setEmail,
    setPassWord,
    setPhone,
  } = useSignUp();

  console.log(name);
  return (
    <Wrapper>
      <SignBox>
        <ContentWrapper>
          <Text>
            <Subtitle3>이름(실명)</Subtitle3>
          </Text>
          <TextField
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            name="name"
            placeholder="김이화"
            label="Name"
            marginBottom="10px"
            fullWidth
            sx={{ mb: 1 }}
          />
        </ContentWrapper>

        <ContentWrapper>
          <Text>
            <Subtitle3>닉네임</Subtitle3>
          </Text>
          <TextField
            value={nickname}
            onChange={(e) => {
              setNickName(e.target.value);
            }}
            name="nickname"
            placeholder="화여니"
            label="Nickname"
            marginBottom="10px"
            fullWidth
            sx={{ mb: 1 }}
          />
        </ContentWrapper>

        <ContentWrapper>
          <Text>
            <Subtitle3>휴대폰 번호</Subtitle3>
          </Text>
          <TextField
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            name="phone"
            placeholder="010-0000-0000"
            label="Phone Number"
            marginBottom="10px"
            fullWidth
            sx={{ mb: 1 }}
          />
        </ContentWrapper>

        <ContentWrapper>
          <Text>
            <Subtitle3>이메일 아이디</Subtitle3>
          </Text>
          <TextField
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            name="email"
            placeholder="ewha@ewha.com"
            label="email"
            marginBottom="10px"
            fullWidth
            sx={{ mb: 1 }}
          />
        </ContentWrapper>

        <ContentWrapper>
          <Text>
            <Subtitle3>비밀번호</Subtitle3>
          </Text>
          <TextField
            value={password}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
            name="password"
            placeholder="1234!!abc"
            label="영문/숫자/특수문자 중 2가지 이상 조합"
            marginBottom="10px"
            fullWidth
            sx={{ mb: 1 }}
          />
        </ContentWrapper>

        <ContentWrapper>
          <Text>
            <Subtitle3>비밀번호 확인</Subtitle3>
          </Text>
          <TextField
            value={password}
            onChange={(e) => {
              setPassWord(e.target.value);
            }}
            name="name"
            placeholder="1234!!abc"
            label="입력하신 번호와 일치시켜 주세요"
            marginBottom="10px"
            fullWidth
            sx={{ mb: 1 }}
          />
        </ContentWrapper>
      </SignBox>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ContentWrapper = styled.div`
  display: flex;
  margin: 4px;
`;

const Text = styled.div`
  width: 155px;
  height: 53px;
  display: flex;
  align-items: center;
  /* background-color: blue; */
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 455px;
  padding-bottom: 8px;
`;

const InputBox = styled.input`
  /*박스*/
  width: 300px;
  height: 42px;
  background: #eeeeee;
  border: none;
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
