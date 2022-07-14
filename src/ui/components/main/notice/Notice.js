import noticeicon from "../../../../assets/icon_megaphone.png";
import NoticeList from "./NoticeList";
import MainSubTitle from "../MainSubTitle";

export default function Notice() {
  return (
    <>
      <MainSubTitle iconSrc={noticeicon} title={"공지사항"} />
      <NoticeList />
    </>
  );
}
