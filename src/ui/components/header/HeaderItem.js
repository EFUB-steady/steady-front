import styled from "styled-components";

export default function HeaderItem({ children }) {
  return <Item>{children}</Item>;
}

const Item = styled.div`
  background-color: black;
  color: white;
  height: 48px;
  margin-right: 5px;
`;
