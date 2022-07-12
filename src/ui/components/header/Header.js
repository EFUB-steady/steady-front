import styled from "styled-components";
import HeaderItem from "./HeaderItem";
import LogoutBtn from "./../buttons/user/LogoutBtn";
import IndexMainPage from "../buttons/common/IndexMainPage";
import IndexMyPage from "./../buttons/common/IndexMyPage";

export default function Header() {
  return (
    <HeaderBox>
      <IndexMainPage />
      <IndexMyPage />
      <LogoutBtn />
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  border-bottom: 3px solid black;
  //margin: 0;
`;
