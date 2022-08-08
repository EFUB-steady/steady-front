import styled from "styled-components";
import { Body3, Subtitle2 } from "../../../../core/texts";
import { useSelectedStudyInfo } from "../../../../feature/studies/studySelect/recoil/useSelectedStudy";
import { Row } from "../../commons/Row";

export default function Account() {
  const { selectedStudy } = useSelectedStudyInfo();

  return (
    <AccountWrapper>
      <div style={{ width: 100 }}>
        <Subtitle2>벌금 계좌</Subtitle2>
      </div>
      <WhiteBox>
        <Body3>{selectedStudy.accountBank}</Body3>
      </WhiteBox>
      <WhiteBox>
        <Body3>{selectedStudy.account}</Body3>
      </WhiteBox>
      <Row>
        <WhiteBox>
          <Body3>{selectedStudy.accountName}</Body3>
        </WhiteBox>
      </Row>
    </AccountWrapper>
  );
}

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const WhiteBox = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 25px;
`;
