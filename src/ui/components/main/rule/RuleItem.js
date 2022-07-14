import styled from "styled-components";
import { gray100 } from "../../../../core/colors";
import { Subtitle2 } from "../../../../core/texts";
import RuleAuthDay from "./RuleAuthDay";
import RuleAuthTime from "./RuleAuthTime";
import RuleMoney from "./RuleMoney";

export default function RuleItem() {
  return (
    <Wrapper>
      <RuleAuthBox>
        <Subtitle2>지정 인증일</Subtitle2>
        <RuleAuthDay />
        <RuleAuthTime />
      </RuleAuthBox>
      <RuleMoneyBox>
        <Subtitle2>결석 시</Subtitle2>
        <RuleMoney />
      </RuleMoneyBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  background-color: ${gray100};
  border: 3px solid black;
  border-radius: 5px;
`;

const RuleAuthBox = styled.div`
  display: flex;
  padding: 40px;
  width: 74%;
  border-right: 3px solid black;
  justify-content: space-around;
  align-items: center;
`;

const RuleMoneyBox = styled.div`
  display: flex;
  padding: 40px;
  width: 26%;
  justify-content: space-around;
  align-items: center;
`;
