import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import AccountInput from "./AccountInput";
import RuleAuthDayInput from "./RuleAuthDayInput";
import PaneltyMoneyInput from "./PaneltyMoneyInput";

export default function RuleInputItem() {
  return (
    <Wrapper>
      <RuleAuthWrapper>
        <RuleAuthDayInput />
        <AccountInput />
      </RuleAuthWrapper>
      <RuleMoneyWrapper>
        <PaneltyMoneyInput title="지각 시" money={1000} />
        <div style={{ height: 30 }} />
        <PaneltyMoneyInput title="결석 시" money={2000} />
      </RuleMoneyWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  min-width: 987px;
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
