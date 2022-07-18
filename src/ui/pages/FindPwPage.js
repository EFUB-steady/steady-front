import styled from "styled-components";
import logo from "../../assets/logo_horizontal.png";
import FindBox from "../components/login/FindBox";

export default function FindPwPage() {
  return (
    <Wrapper>
      <LogoImg src={logo} />
      <FindBox />
    </Wrapper>
  );
}
const LogoImg = styled.img``;

const Wrapper = styled.div`
  place-items: center;
  display: grid;
  padding: 5rem;
  border-radius: 1rem;
`;
