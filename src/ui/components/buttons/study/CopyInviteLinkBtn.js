import styled from "styled-components";
import { Body2 } from "../../../../core/texts";

export default function CopyInviteLinkBtn() {
  return (
    <Wrapper>
      <Body2>링크를 가진 회원만 참여 가능합니다!</Body2>
      <Button>초대 링크 복사하기</Button>;
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  margin-top: -15px;
`;
const Button = styled.button`
  width: 168px;
  height: 40px;
  margin-left: 40px;
  background-color: black;
  border-radius: 5px;
  color: white;
  font-size: 14px;
  font-weight: 700;
  font-family: "Pretendard-regular";
`;
