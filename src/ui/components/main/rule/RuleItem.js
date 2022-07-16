import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import Account from "./Account";
import RuleAuthDay from "./RuleAuthDay";
import PaneltyMoney from "./PaneltyMoney";

export default function RuleItem() {
  return (
    <Wrapper>
      <RuleAuthWrapper>
        <RuleAuthDay />
        <Account />
      </RuleAuthWrapper>
      <RuleMoneyWrapper>
        <PaneltyMoney title="지각 시" money={1000} />
        <div style={{ height: 30 }} />
        <PaneltyMoney title="결석 시" money={2000} />
      </RuleMoneyWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${gray100};
  border: 3px solid black;
  border-radius: 5px;
`;

const RuleAuthWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  border-right: 3px solid black;
  justify-content: center;
  padding: 30px;
`;

const RuleMoneyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: center;
  padding: 30px;
`;
