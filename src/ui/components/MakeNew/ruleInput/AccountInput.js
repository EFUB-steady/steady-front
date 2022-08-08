import styled from "styled-components";
import { Subtitle2 } from "../../../../core/texts";
import { useMakeStudy } from "../../../../feature/MakeStudy/recoil/useMakeStudy";

export default function AccountInput() {
  const {
    accountBank,
    account,
    accountName,
    setAccountBank,
    setAccount,
    setAccountName,
  } = useMakeStudy();

  return (
    <AccountWrapper>
      <div style={{ width: 110 }}>
        <Subtitle2>벌금 계좌</Subtitle2>
      </div>
      <Input
        value={accountBank}
        style={{ width: 100 }}
        placeholder="신한"
        type="text"
        onChange={(e) => {
          setAccountBank(e.target.value);
        }}
      />
      <Input
        value={account}
        style={{ width: 250 }}
        placeholder="110-000-000000"
        type="text"
        onChange={(e) => {
          setAccount(e.target.value);
        }}
      />
      <Input
        value={accountName}
        style={{ width: 100 }}
        placeholder="ㄱㅇㅇ"
        type="text"
        onChange={(e) => {
          setAccountName(e.target.value);
        }}
      />
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
  margin-right: 20px;
  font-size: 18px;
  font-family: "Pretendard";
`;
