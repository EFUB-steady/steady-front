import styled from "styled-components";
import LogoutBtn from "./../buttons/user/LogoutBtn";
import IndexMainPage from "../buttons/common/IndexMainPage";
import IndexMyPage from "./../buttons/common/IndexMyPage";

export default function Header() {
  return (
    <HeaderBox>
      <div>
        <IndexMainPage />
        <IndexMyPage />
      </div>
      <LogoutBtn />
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  height: auto;
  justify-content: space-between;
  border-bottom: 3px solid black;
  margin-top: 64px;
  //margin: 0;
`;
