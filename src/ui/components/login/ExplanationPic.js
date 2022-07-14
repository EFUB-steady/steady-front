import logo from "../../../assets/text_logo_long.png";
import link from "../../../assets/link.png";
import coin from "../../../assets/coin.png";
import chart from "../../../assets/chart.png";
import calender from "../../../assets/calender.png";

import styled from "styled-components";
import { Title3 } from "./../../../core/texts";

export default function ExplanationPic() {
  return (
    <div>
      <Logo src={logo} />
      <Title3>내가 속한 스터디를 쉽게 관리해 보세요!</Title3>
      <PicTextBox>
        <LinkPic src={link} />
        <p>초대를 통한 신뢰감 있는 스터디</p>
      </PicTextBox>
      <PicTextBox>
        <p>벌금 정산을 간편하게,</p>
        <CoinPic src={coin} />
      </PicTextBox>

      <PicTextBox>
        <ChartPic src={chart} />
        <CalenderPic src={calender} />
      </PicTextBox>
    </div>
  );
}

const Logo = styled.img`
  width: 329px;
  height: 64px;
`;
const LinkPic = styled.img`
  width: 196.23px;
  height: 196.23px;
  left: 1067.48px;
  top: 239.71px;
  transform: matrix(-0.98, -0.19, -0.19, 0.98, 0, 0);
`;

const CoinPic = styled.img`
  width: 141px;
  height: 194px;
  left: 1150px;
  top: 455px;
`;

const ChartPic = styled.img`
  width: 181.39px;
  height: 181.39px;
  left: 895px;
  top: 662px;
`;

const CalenderPic = styled.img`
  width: 105.59px;
  height: 105.59px;
  left: 1015.93px;
  top: 726.07px;
`;
const PicTextBox = styled.div`
  display: flex;
`;
