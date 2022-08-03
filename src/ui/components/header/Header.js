import styled from "styled-components";

import LogoutBtn from "./../buttons/user/LogoutBtn";
import IndexMainPage from "../buttons/common/IndexMainPage";
import IndexMyPage from "./../buttons/common/IndexMyPage";

export default function Header() {
  return (
    <HeaderBox>
      <Wrapper>
        <IndexMainPage />
        <IndexMyPage />
      </Wrapper>
      <LogoutBtn />
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  //height: auto;
  height: 990rem;
  justify-content: space-between;
  border-bottom: 3px solid black;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
