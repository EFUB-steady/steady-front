import styled from "styled-components";
import UserJoinBtn from "../buttons/user/UserJoinBtn";
import { hintColor } from "../../../core/colors";
import SignInfoList from "./SignInfoList";
export default function SignInfo({ sign }) {
  return (
    <Wrapper>
      <SignInfoList />
      <BtnBox>
        <Text></Text>
        <UserJoinBtn />
      </BtnBox>
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
