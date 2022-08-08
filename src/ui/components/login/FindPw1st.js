import styled from "styled-components";
import { Subtitle3, Body } from "../../../core/texts";
import { hintColor } from "../../../core/colors";
export default function FindPw1st() {
  return (
    <Content>
      <SignBox>
        <Text>
          <Subtitle3>이메일 아이디</Subtitle3>
        </Text>
        <InputBox placeholder="ewhakim@mail.com" />
      </SignBox>
      <BodyWrapper>
        <Body>
          등록된 이메일 아이디로 비밀번호를 재설정할 수 있는 링크가 전송됩니다.{" "}
          <br />
          만약 이메일이 오지 않는다면, 스팸 편지함으로 이동하지 않았는지
          확인해주세요. <br />
          이메일 서비스 제공자 사정에 의해 즉시 도착하지 않을 수 있으니, 최대
          30분 정도 <br />
          기다리신 후 다시 시도해주세요.
          <br />
        </Body>
      </BodyWrapper>
    </Content>
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
  padding: 2rem;

  width: 400px;
  margin-left: 50px;
`;

const InputBox = styled.input`
  /*박스*/
  width: 280px;
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
`;

const Content = styled.div``;

const BodyWrapper = styled.div`
  width: 500px;
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
`;
