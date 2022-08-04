import styled from "styled-components";
import CustomLink from "../../commons/CustomLink";
export default function BackToLoginBtn() {
  return (
    <CustomLink to="/">
      <Button>로그인 페이지로 돌아가기</Button>;
    </CustomLink>
  );
}

const Button = styled.button`
  width: 400px;
  height: 50px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
