import styled from "styled-components";
import logo from "../../assets/logo_horizontal.png";
import FindBox from "../components/login/FindBox";
import { Subtitle3, Body } from "../../core/texts";
import { hintColor } from "../../core/colors";
import GoBackBtn from "../components/buttons/common/GoBackBtn";
export default function FindPwPage() {
  return (
    <>
      <GoBackBtn />
      <Wrapper>
        <LogoImg src={logo} />
        <FindBox />
        <Content>
          <SignBox>
            <Text>
              <Subtitle3>이메일 아이디</Subtitle3>
            </Text>
            <InputBox>ewhakim@mail.com</InputBox>
          </SignBox>

          <Body>
            등록된 이메일 아이디로 비밀번호를 재설정할 수 있는 링크가
            전송됩니다. <br />
            만약 이메일이 오지 않는다면, 스팸 편지함으로 이동하지 않았는지
            확인해주세요. <br />
            이메일 서비스 제공자 사정에 의해 즉시 도착하지 않을 수 있으니, 최대
            30분 정도 <br />
            기다리신 후 다시 시도해주세요.
          </Body>
        </Content>
      </Wrapper>
    </>
  );
}
const LogoImg = styled.img``;

const Wrapper = styled.div`
  place-items: center;
  display: grid;
  padding: 5rem;
  border-radius: 1rem;
`;

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

const Content = styled.div`
  width: 400px;
  height: 196px;
`;
