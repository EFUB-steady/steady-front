import styled from "styled-components";
import ExplanationPic from "../components/login/ExplanationPic";
import logo from "../../assets/logo_horizontal.png";

import SignInfo from "./../components/login/SignInfo";
export default function JoinPage() {
  return (
    <div>
      <LogoImg src={logo} />
      <SignInfo />
      <ExplanationPic />
    </div>
  );
}
const LogoImg = styled.img``;
