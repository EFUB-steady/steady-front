import RuleInputItem from "./RuleInputItem";
import noticeIcon from "../../../../assets/icon_coin.png";
import MainSubTitle from "../../main/MainSubTitle";

export default function RuleInput() {
  return (
    <>
      <MainSubTitle iconSrc={noticeIcon} title={"벌금 규칙*"} />
      <RuleInputItem />
    </>
  );
}
