import styled from "styled-components";
import { Body2, Subtitle2 } from "../../../../core/texts";
import AuthCancelYesBtn from "../../../components/buttons/study/AuthCancelYesBtn";
import AuthCancelNoBtn from "../../../components/buttons/study/AuthCancelNoBtn";
import { startOfSecond } from "date-fns";

{/*피그마 최종_신고팝업 모달 ui 부분
Modal은 ReportCancelModal.js 부분이고, 소진님께서 노션에 올려주신 recoil을 이용한 
Modal 창 띄우는 부분에서 state, useModals.js에서 hooks 정도까지 만들어 놓았습니다. */}

export default function ReportCancle() {
  return (
    <>
      <Wrapper>
        <Subtitle2>인증 취소</Subtitle2>
        <SecondWrapper>
          <Body2>00000님 05월 00일자</Body2>
          <Body2>인증을 취소하시겠습니까?</Body2>
        </SecondWrapper>
        <ButtonWrapper>
          <div style={{ marginLeft: "12px" }}>
            <AuthCancelYesBtn />
          </div>
          <div style={{ marginRight: "12px" }}>
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
