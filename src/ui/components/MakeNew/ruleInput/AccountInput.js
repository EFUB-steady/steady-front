import styled from "styled-components";
import { Subtitle2 } from "../../../../core/texts";

export default function AccountInput() {
  return (
    <AccountWrapper>
      <div style={{ width: 110 }}>
        <Subtitle2>벌금 계좌</Subtitle2>
      </div>
      <Input style={{ width: 100 }} placeholder="신한" type="text" />
      <Input style={{ width: 250 }} placeholder="110-000-000000" type="text" />
      <Input style={{ width: 100 }} placeholder="ㄱㅇㅇ" type="text" />
    </AccountWrapper>
  );
}

const AccountWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  background-color: white;
  height: 35px;
  text-align: center;
  border: 0;
  margin-left: 25px;
  margin-right: 10px;
  font-size: 18px;
  font-family: "Pretendard";
`;
