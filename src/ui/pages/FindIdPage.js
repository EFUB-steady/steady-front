import styled from "styled-components";
import logo from "../../assets/logo_horizontal.png";
import FindBox from "../components/login/FindBox";
import { hintColor } from "../../core/colors";
import { Subtitle3 } from "../../core/texts";
export default function FindIdPage() {
  return (
    <Wrapper>
      <LogoImg src={logo} />
      <FindBox />
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
        <InputBox>010-0000-0000</InputBox>
      </SignBox>
    </Wrapper>
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
