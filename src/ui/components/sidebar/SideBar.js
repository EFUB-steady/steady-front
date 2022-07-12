import styled from "styled-components";
import { gray100 } from "../../../core/colors";
import { Body2, Subtitle2 } from "../../../core/texts";
import logo from "../../../assets/logo_vertical.png";
import coin from "../../../assets/icon_coin.png";
import MakeNewStudyBtn from "../buttons/study/MakeNewStudyBtn";
import SideBarStudyList from "./SideBarStudyList";

export default function SideBar() {
  return (
    <SideBarBox>
      <Logo src={logo} />
      <div style={{ marginTop: "40px", marginBottom: "25px" }}>
        <Subtitle2>MY STUDY</Subtitle2>
      </div>
      <SideBarStudyList />
      <Bar />
      <div
        style={{
          marginTop: "23px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Subtitle2>
          이번주 벌금 정산 <Coin src={coin} />
        </Subtitle2>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "nowrap",
          marginTop: "23px",
          alignItems: "center",
        }}
      >
        <Body2>000000 </Body2>
        <span style={{ marginLeft: "8px" }}>
          <Subtitle2>원</Subtitle2>
        </span>
      </div>
      <MakeNewStudyBtn />
    </SideBarBox>
  );
}

const SideBarBox = styled.div`
  background-color: ${gray100};
  position: fixed;
  width: 198px;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled.img`
  width: 104px;
  height: 167px;
  margin-top: 40px;
`;

const Bar = styled.div`
  width: 168px;
  height: 3px;
  border-radius: 5px;
  margin-top: 23px;
  background-color: black;
`;

const Coin = styled.img`
  width: 15px;
  height: 18px;
`;
