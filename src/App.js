import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../src/ui/pages/LoginPage";
import JoinPage from "../src/ui/pages/JoinPage";
import MainPage from "../src/ui/pages/MainPage";
import MakeNewPage from "../src/ui/pages/MakeNewPage";
import MyPagePage from "../src/ui/pages/MyPagePage";
import AuthPage from "../src/ui/pages/AuthPage";
import FindIdPage from "../src/ui/pages/FindIdPage";
import FindPwPage from "../src/ui/pages/FindPwPage";
import HostMainPage from "../src/ui/pages/HostMainPage";
import routes from "./routes/routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.LOGIN} element={<LoginPage />} />
        <Route path={routes.MAIN} element={<MainPage />} />
        {/* <Route path={routes.JOIN} element={<JoinPage />} /> */}
        <Route path={routes.SIGNUP} element={<JoinPage/>}/>
        <Route path={routes.MAKENEW} element={<MakeNewPage />} />
        <Route path={routes.MYPAGE} element={<MyPagePage />} />
        <Route path={routes.AUTHPAGE} element={<AuthPage />} />
        <Route path={routes.FINDID} element={<FindIdPage />} />
        <Route path={routes.FINDPW} element={<FindPwPage />} />
        <Route path={routes.HOSTMAIN} element={<HostMainPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
