import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import { Subtitle2 } from "../../../core/texts";
import logo from './SideBarLogo.png';

export default function SideBar() {

  
  return (
  <SideBarBox>
    <Logo src={logo}/>
    <div style={{marginTop:'40px'}}>
    <Subtitle2>MY STUDY</Subtitle2>
    </div>
    <
  </SideBarBox>
  );
}


const SideBarBox = styled.div`
  background-color: ${gray100};
  width: 198px;
  height: 1024px;
  display: flex;
  /* justify-content: center; */
  flex-direction: column;
  align-items: center;
  
`;

const Logo= styled.img`
width: 104px;
height: 167px;
margin-top: 40px;
`;