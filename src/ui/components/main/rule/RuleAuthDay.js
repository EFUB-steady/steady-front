import styled from "styled-components";
import { Body3, Subtitle2 } from "../../../../core/texts";
import { useSelectedStudyInfo } from "../../../../feature/studies/studySelect/recoil/useSelectedStudy";
import { Row } from "../../commons/Row";
import DayBox from "./DayBox";

export default function RuleAuthDay({}) {
  const { selectedStudy } = useSelectedStudyInfo();

  const renderAuthDays = () => {
    const result = [];
    if (selectedStudy.mon) result.push(<DayBox day="월" />);
    if (selectedStudy.tue) result.push(<DayBox day="화" />);
    if (selectedStudy.wed) result.push(<DayBox day="수" />);
    if (selectedStudy.thu) result.push(<DayBox day="목" />);
    if (selectedStudy.fri) result.push(<DayBox day="금" />);
    if (selectedStudy.sat) result.push(<DayBox day="토" />);
    if (selectedStudy.sun) result.push(<DayBox day="일" />);
    return result;
  };

  return (
    <AuthDayWrapper>
      <div style={{ width: 100, marginRight: "25px" }}>
        <Subtitle2>지정 인증일</Subtitle2>
      </div>
      {renderAuthDays()}
      <WhiteBox>
        <Body3>{selectedStudy.hour >= 12 ? "오후" : "오전"}</Body3>
      </WhiteBox>
      <Row>
        <WhiteBox>
          <Body3>
            {selectedStudy.hour > 12
              ? selectedStudy.hour - 12
              : selectedStudy.hour}
          </Body3>
        </WhiteBox>
        <Subtitle2>시</Subtitle2>
      </Row>
      <Row>
        <WhiteBox>
          <Body3>{selectedStudy.minute}</Body3>
        </WhiteBox>
        <Subtitle2>분</Subtitle2>
      </Row>
    </AuthDayWrapper>
  );
}

const AuthDayWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const WhiteBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 35px;
  padding: 0 10px;
  margin-left: 20px;
  margin-right: 5px;
`;
