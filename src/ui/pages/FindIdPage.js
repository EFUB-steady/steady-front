import styled from "styled-components";
import logo from "../../assets/logo_horizontal.png";
import FindBox from "../components/login/FindBox";

export default function FindIdPage() {
  return (
    <div>
      <LogoImg src={logo} />
      <FindBox />
    </div>
  );
}
const LogoImg = styled.img``;
