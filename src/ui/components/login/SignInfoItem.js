import styled from "styled-components";
import { hintColor } from "../../../core/colors";
import { Subtitle3 } from "./../../../core/texts";
export default function SignInfoItem({ sign }) {
  return (
    <Wrapper>
      <SignBox>
        <Text>
          <Subtitle3>{sign.name}</Subtitle3>
        </Text>
        <InputBox placeholder={sign.explain} />
      </SignBox>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Text = styled.div`
  width: 155px;
  height: 42px;
  display: flex;
  align-items: center;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 455px;
  padding-bottom: 8px;
`;

const InputBox = styled.input`
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
