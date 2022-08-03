import styled from "styled-components";
import { gray300 } from "../../../../core/colors";
import { format } from "date-fns";
import icon from "../../../../assets/icon_alert.png";
import { Body2 } from "../../../../core/texts";
import AuthCancelBtn from "../../../../ui/components/buttons/study/AuthCancelBtn";

//피그마 신고 자세히보기 작성자 000님 + 밑줄까지 ui
export default function ReportMoreModalTitle() {
  const today = new Date();
  const formattedToday = format(today, "MM월 dd일");

  return (
    <>
      <Wrapper>
        <AlertIcon src={icon} />
        <Title>{formattedToday}</Title>
      </Wrapper>
      <SecondWrapper>
        <div style={{ margin: "8px" }}>
          <Body2>작성자 000000님</Body2>
        </div>
        <AuthCancelBtn />
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
