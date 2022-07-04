import styled from "styled-components";
import HeaderItem from "./HeaderItem";
import LogoutBtn from "./LogoutBtn";

export default function Header() {
  return (
    <HeaderBox>
      <HeaderItem>Main Page</HeaderItem>
      <HeaderItem>My Page</HeaderItem>
      <LogoutBtn />
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  height: auto;
  border: 1px solid black;
`;
