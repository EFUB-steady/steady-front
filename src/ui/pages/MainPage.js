import Header from "../components/header/Header";
import Calendar from "../components/main/calendar/Calendar";
import Notice from "../components/main/notice/Notice";
import Ranking from "../components/main/ranking/Ranking";
import Rule from "../components/main/rule/Rule";
import StudyInfo from "../components/main/study-info/StudyInfo";
import SideBar from "../components/sidebar/SideBar";

export default function MainPage() {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <div style={{ flexDirection: "column" }}>
        <Header />
        <StudyInfo />
        <Calendar />
        <Ranking />
        <Rule />
        <Notice />
      </div>
    </div>
  );
}
