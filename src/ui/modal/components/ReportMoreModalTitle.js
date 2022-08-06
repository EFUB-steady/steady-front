import styled from "styled-components";
import { format } from "date-fns";
import icon from "../../../assets/icon_alert.png";
import { Body2 } from "../../../core/texts";
import ReportCancelModal from "../modals/ReportCancelModal";
import { useState } from "react";

export default function ReportMoreModalTitle({ setIsOpenMore }) {
  const today = new Date();
  const formattedToday = format(today, "MM월 dd일");
  const [isOpenCancel, setIsOpenCancel] = useState(false);

  return (
    <>
      <ReportCancelModal
        isOpenCancel={isOpenCancel}
        setIsOpenCancel={setIsOpenCancel}
        setIsOpenMore={setIsOpenMore}
      />
      <Wrapper>
        <AlertIcon src={icon} />
        <Title>{formattedToday}</Title>
      </Wrapper>
      <SecondWrapper>
        <div style={{ margin: "8px" }}>
          <Body2>작성자 000000님</Body2>
        </div>
        <Button onClick={() => setIsOpenCancel(true)}>인증 취소</Button>
      </SecondWrapper>
      <Divider />
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: black;
  line-height: 100%;
`;

const AlertIcon = styled.img`
  width: 30px;
  height: 30px;
  margin-right: 19.17px;
`;

const SecondWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Divider = styled.div`
  width: 920px;
  height: 3px;
  background-color: #000000;
  border-radius: 5px;
  display: flex;
`;

const Button = styled.button`
  background-color: black;
  color: white;
  border-radius: 5px;
  width: 108px;
  height: 40px;
  font-family: Pretendard;
`;
