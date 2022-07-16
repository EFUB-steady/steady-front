import styled from "styled-components";
import { Body2, Subtitle2 } from "../../../../core/texts";
import { Row } from "../../commons/Row";

export default function Account({}) {
  return (
    <AccountWrapper>
      <div style={{ width: 100 }}>
        <Subtitle2>벌금 계좌</Subtitle2>
      </div>
      <WhiteBox>
        <Body2>신한</Body2>
      </WhiteBox>
      <WhiteBox>
        <Body2>110-000-000000</Body2>
      </WhiteBox>
      <Row>
        <WhiteBox>
          <Body2>ㄱㅇㅇ</Body2>
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
  background-color: white;
  height: 35px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: 25px;
`;
