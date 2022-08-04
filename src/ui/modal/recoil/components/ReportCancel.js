import styled from "styled-components";
import { Body2, Subtitle2 } from "../../../../core/texts";
import AuthCancelYesBtn from "../../../components/buttons/study/AuthCancelYesBtn";
import AuthCancelNoBtn from "../../../components/buttons/study/AuthCancelNoBtn";
import { startOfSecond } from "date-fns";


export default function ReportCancel() {
  return (
    <>
      <Wrapper>
        <Subtitle2>인증 취소</Subtitle2>
        <SecondWrapper>
          <Body2>00000님 05월 00일자</Body2>
          <Body2>인증을 취소하시겠습니까?</Body2>
        </SecondWrapper>
        <ButtonWrapper>
          <div style={{ marginRight: "12px" }}>
            <AuthCancelYesBtn />
          </div>
          <div>
            <AuthCancelNoBtn />
          </div>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SecondWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin-top: 16px;
  justify-content: center;
  align-items: center;
`;
