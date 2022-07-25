import styled from "styled-components";
import { Body2, Subtitle2 } from "../../../../core/texts";
import { Row } from "../../commons/Row";

export default function RuleAuthDayInput() {
  return (
    <AuthDayWrapper>
      <div style={{ width: 100 }}>
        <Subtitle2>지정 인증일</Subtitle2>
      </div>
      {/* TODO: 위쪽 요일 블록 선택결과에 따라 문자열 달리 해 보여주기 */}
      <WhiteBox>
        <Body2>월, 화, 수, 목, 금, 토</Body2>
      </WhiteBox>
      {/* TODO: 드롭다운 */}
      <WhiteBox>
        <Body2>오전</Body2>
      </WhiteBox>
      <Row>
        <Input placeholder="00" type="text" />
        <Subtitle2>시</Subtitle2>
      </Row>
      <Row>
        <Input placeholder="00" type="text" />
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
  background-color: white;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 25px;
`;

const Input = styled.input`
  background-color: white;
  height: 35px;
  width: 50px;
  text-align: center;
  border: 0;
  margin-left: 25px;
  margin-right: 5px;
  font-size: 18px;
  font-family: "Pretendard";
`;
