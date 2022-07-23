import styled from "styled-components";
import { gray100, hintColor } from "../../../../core/colors";
import icon from "../../../../assets/icon_picture_card_mypage.png";
import alerticon from "../../../../assets/icon_alert.png";
import { Subtitle2 } from "../../../../core/texts";
import { style } from "@mui/system";

export function OtherStudyModalPic() {
  return (
    <Wrapper>
      <TitleWrapper>
        <TitleIcon src={icon} />
        <Subtitle2>
          <div style={{ marginTop: "11px" }}>사진 인증</div>
        </Subtitle2>
        <AlertIcon src={alerticon} />
      </TitleWrapper>
      <UserName><UserCircle/> 000000님</UserName>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 920px;
  height: 517.5px;
  background-color: ${gray100};
  border: 3px solid #000000;
  margin-top: 40px;
  box-sizing: border-box;
  border-radius: 5px;
`;
const TitleWrapper = styled.div`
  width: 914px;
  height: 40px;
  background-color: #ffffff;
  border-bottom: 3px solid #000000;
  display: flex;
  box-sizing: border-box;
`;

const AlertIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 750px;
  margin-right: 9px;
  margin-top: 9px;
  background-color: black;
`;

const TitleIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-left: 17px;
  margin-right: 9px;
  margin-top: 9px;
`;

const UserName = styled.div`
  background-color: black;
  width: 141px;
  height: 40px;
  border-radius: 5px;
  margin-top: 432.4px;
  margin-left: 775px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UserCircle = styled.span`
width:20px;
height:20px;
border-radius: 50%;
border: 1px solid #FFFFFF;
background-color:red;
margin-right:13px`