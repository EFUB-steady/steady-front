import styled from "styled-components";
import { Subtitle2 } from "../../../core/texts";
import logo from "../../../assets/logo_vertical.png";

export default function SideLogoBox() {
  return (
    <>
      <Logo src={logo} />
      <Subtitle2>MY STUDY</Subtitle2>
    </>
  );
}

const Logo = styled.img`
  width: 104px;
  height: 167px;
  margin: 40px 0;
`;
