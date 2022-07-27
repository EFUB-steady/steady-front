import styled from "styled-components";
import CustomLink from "../../commons/CustomLink";
export default function LogoutBtn() {
  return (
    <CustomLink to="/">
      <Button>LOGOUT</Button>
    </CustomLink>
  );
}

const Button = styled.button`
  width: 108px;
  height: 40px;
  border-radius: 5px;
  border: 3px solid black;
  background: #f5f5f5;
  text-align: center;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;

  &:hover {
    background: black;
    color: white;
  }
  &:active {
    background: black;
    color: white;
  }
`;
