import styled from "styled-components";
import { gray100 } from "../../../core/colors";
export default function SideBar() {
  return <SideBarBox />;
}

const SideBarBox = styled.div`
  background-color: ${gray100};
  width: 198px;
  height: 1024px;
`;
