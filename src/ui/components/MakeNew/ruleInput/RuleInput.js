import RuleInputItem from "./RuleInputItem";
import noticeIcon from "../../../../assets/icon_coin.png";
import styled from "styled-components";
import MainSubTitle from "../../main/MainSubTitle";

export default function RuleInput() {
  return (
    <Wrapper>
      <MainSubTitle iconSrc={noticeIcon} title={"벌금 규칙*"} />
      <RuleInputItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
