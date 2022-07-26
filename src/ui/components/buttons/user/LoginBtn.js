import styled from "styled-components";
import CustomLink from "../../commons/CustomLink";

export default function LoginBtn() {
  return (
    <CustomLink to="/main">
      <Button>로그인</Button>
    </CustomLink>
  );
}

const Button = styled.button`
  width: 77px;
  height: 130px;
  background: black;
  border-radius: 5px;
  color: white;
  margin: 4px;
`;
