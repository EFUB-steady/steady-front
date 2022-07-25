import styled from "styled-components";
import { Subtitle2 } from "../../../core/texts";
import logo from "../../../assets/logo_vertical.png";

export default function SideLogoBox() {
  return (
    <Wrapper>
      <Logo src={logo} />
      <Subtitle2>MY STUDY</Subtitle2>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`;

const Logo = styled.img`
  width: 104px;
  height: 167px;
  margin-bottom: 25px;
`;
