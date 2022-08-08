import MainSubTitle from "../MainSubTitle";
import RuleItem from "./RuleItem";
import noticeIcon from "../../../../assets/icon_coin.png";
import styled from "styled-components";

export default function Rule() {
  return (
    <Wrapper>
      <MainSubTitle iconSrc={noticeIcon} title={"벌금 규칙"} />
      <RuleItem />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-bottom: 40px;
`;
