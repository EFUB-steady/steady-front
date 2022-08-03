import styled from "styled-components";
// import { useAccessToken } from "../../feature/auth/recoil/useAuthState";
import { useUserInfo } from "../../feature/user/api/useUserInfo";
import Header from "../components/header/Header";
import Mcalendar from "../components/main/calendar/Mcalendar";
import Notice from "../components/main/notice/Notice";
import Ranking from "../components/main/ranking/Ranking";
import Rule from "../components/main/rule/Rule";
import StudyInfo from "../components/main/study-info/StudyInfo";
import SideBar from "../components/sidebar/SideBar";

export default function MainPage() {
  const { userInfo } = useUserInfo();
  // const { accessToken } = useAccessToken();
  // console.log("token::::" + accessToken.toString());
  // userInfo({
  //   onSuccess: () => {
  //     console.log("onsuccess");
  //   },
  //   onFail: () => {
  //     console.log("onfial");
  //   },
  // });
  return (
    <Wrapper>
      <SideBar />
      <MainContext>
        <Header />
        <StudyInfo />
        <Mcalendar />
        <Ranking />
        <Rule />
        <Notice />
      </MainContext>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

const MainContext = styled.div`
  display: flex;
  width: 100%;
  min-width: 987px;
  flex-direction: column;
  margin: 58px 90px 58px 288px;
`;
