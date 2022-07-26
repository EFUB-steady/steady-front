import styled from "styled-components";
import BackToLoginBtn from "../buttons/user/BackToLoginBtn";
export default function FindIdPage() {
  return (
    <>
      <GoBackBtn />
      <Wrapper>
        <LogoImg src={logo} />
        <Indexes />
        <SignBox>
          <div>회원님의 아이디는 ewhakim@mail.com 입니다.</div>
        </SignBox>
        <BackToLoginBtn />
      </Wrapper>
    </>
  );
}
const LogoImg = styled.img`
  padding: 2rem;
`;

const Wrapper = styled.div`
  place-items: center;
  display: grid;
  padding: 5rem;
  border-radius: 1rem;
`;

const SignBox = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 8px;
  padding: 1.5rem;
`;
